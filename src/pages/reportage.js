import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Репортаж</h1>
    <section id="gallery-lightbox" class="spacing-top-gallery">
      <div class="row pt-2 mt-4">
        <div class="col-md-12">
          <div id="mdb-lightbox-ui"></div>
          <div class="mdb-lightbox">
            <figure class="col-md-6">
              <a
                href="./img/reportage/big/sap_mix_big1-min.jpg"
                data-size="1920x1280"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sap_mix_small_1.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/big/sap_mix_big2-min.jpg"
                data-size="1920x1280"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sap_mix_small_2.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/big/sap_mix_big3-min.jpg"
                data-size="1920x1280"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sap_mix_small_3.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/big/sap_mix_big4-min.jpg"
                data-size="1920x1280"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sap_mix_small_4.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/big/match_mix_small3-new.jpg"
                data-size="1920x1280"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/match_mix_small3.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/match_mix_small2.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/match_mix_small2.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/small/match_mix_small1.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/match_mix_small1.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/children_mix_small2.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/children_mix_small2.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/small/children_mix_small3.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/children_mix_small3.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/studentsYear_mix_small1.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/studentsYear_mix_small1.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/small/children_mix_small11.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/children_mix_small11.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/sokolniki_mix_small_1.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sokolniki_mix_small_1.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/small/sportStadium_mix_small1.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sportStadium_mix_small1.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/sportStadium_mix_small3.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sportStadium_mix_small3.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
            <figure class="col-md-6">
              <a
                href="./img/reportage/small/sportStadium_mix_small2.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sportStadium_mix_small2.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>

            <figure class="col-md-6">
              <a
                href="./img/reportage/small/sportStadium_mix_small5.jpg"
                data-size="900x600"
              >
                <img
                  alt="reportage"
                  src="./img/reportage/small/sportStadium_mix_small5.jpg"
                  class="img-fluid"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
