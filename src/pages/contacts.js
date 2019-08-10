import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Роман Корнилов — Контакты" />
    <h1 style={{ textAlign: `center`, paddingTop: `10px` }}>Контакты</h1>
    <div className="row d-flex justify-content-center align-self-center mt-5">
      <div className="col-lg-4">
        <div className="card-body contact text-center">
          <hr className="hr-dark mt-2" />
          <h4 className="mt-4 mb-2 pb-2">Связаться со мной:</h4>
          <ul className="text-center list-unstyled ml-4">
            <li>
              <p>
                <i className="fa fa-phone pr-2"></i>
                <a href="tel:+79055569407" style={{ color: `white` }}>
                  +7 (905) 556 94 07
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-envelope pr-2"></i>
                <a
                  href="mailto:kornilov.business@gmail.com"
                  style={{ color: `white` }}
                >
                  kornilov.business@gmail.com
                </a>
              </p>
            </li>
            <li>
              <hr className="hr-dark my-4" />
              <p>
                Если у вас есть вопрос, напишите мне,
                и&nbsp;я&nbsp;с&nbsp;радостью отвечу на него
                в&nbsp;ближайшее&nbsp;время.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
