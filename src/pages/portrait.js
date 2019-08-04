import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Portrait = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <h1>Портрет</h1>
      {/* <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      /> */}
    </div>
    {/* ------------------ */}
    <Link to="/portrait/">portrait</Link>
    <br />
    <Link to="/reportage/">reportage</Link>
    <br />
    <Link to="/video/">video</Link>
    <br />
    <Link to="/about/">about</Link>
    <br />
    <Link to="/price/">price</Link>
    <br />
    <Link to="/contacts/">contacts</Link>
  </Layout>
)

export default Portrait
