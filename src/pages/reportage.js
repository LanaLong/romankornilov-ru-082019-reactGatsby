import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Репортаж</h1>

    {/* <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
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

export default IndexPage
