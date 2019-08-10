import React from "react"
import { Frame, Stack } from "framer"

function TabButton({ title = "Title", onTap, active }) {
  const color = active === title ? "black" : "white"

  return (
    <Frame
      size={25}
      borderRadius={50}
      onTap={onTap}
      whileHover={{ scale: 1.1 }}
      background={color}
    >
      {title}
    </Frame>
  )
}

export function Slider({ children }) {
  const [active, setActive] = React.useState(
    children.lenght ? children[0].props.name : null
  )

  function makeProps(title) {
    return {
      title: title,
      active: active,
      onTap: () => {
        setActive(title)
      },
    }
  }

  const buttons = React.Children.map(children, child => {
    return <TabButton {...makeProps(child.props.name)} />
  })

  let activeView = (
    <Frame center backgroundColor="transparent" color="white">
      There is nothing here
    </Frame>
  )

  React.Children.forEach(children, child => {
    if (child.props.name === active) {
      activeView = React.cloneElement(child, {
        width: "100%",
        height: "100%",
        animate: { scale: 1 },
        initial: { scale: 1.05 },
        transition: { type: "tween", ease: "EaseInOut", duration: 2 },
      })
    }
  })

  return (
    <Frame size="100%" background="rgba(0,0,0 .9)">
      {activeView}
      <Stack
        bottom={0}
        width="100%"
        height={50}
        background="rgba(255, 255, 255, .2)"
        direction="horizontal"
        distribution="center"
      >
        {buttons}
      </Stack>
    </Frame>
  )
}

export default Slider
