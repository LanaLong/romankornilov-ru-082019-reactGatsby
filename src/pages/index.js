import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ControlledCarousel from "../components/carousel"
import SliderMdb from "../components/sliderMdb"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ControlledCarousel />
    <SliderMdb />
  </Layout>
)

export default IndexPage
