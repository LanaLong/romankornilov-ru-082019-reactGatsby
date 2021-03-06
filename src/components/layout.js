import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import NavbarPage from "./navbarpage"
import Footer from "./footer"
import styled from "styled-components"
import "./layout.css"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ backgroundColor: `#333` }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper style={{}}>
          <main>{children}</main>
        </Wrapper>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
