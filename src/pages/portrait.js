import React from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
// import MasonryPage from "../components/masonryPage"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const PortraitPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Роман Корнилов — Портрет" />
      {/* <MasonryPage /> */}
      <div id="gallery-lightbox" className="spacing-top-gallery">
        <div className="row pt-2 mt-4">
          <div className="col-md-12">
            <div className="mdb-lightbox">
              {data.allFile.edges.map(({node}) => (
                <figure className="col-md-4">
                  <a
                    href="../images/portrait/big/min/portrait_106.jpg"
                    data-size="1920x1280"
                  >
                    <Img alt="portrait" className="img-fluid" fluid={node.childImageSharp.fluid} />
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default PortraitPage

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "slider" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
