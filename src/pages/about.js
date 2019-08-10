import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Роман Корнилов — обо мне" />
    <h1>Обо мне</h1>
    <section class="team-section spacing-top">
      <div class="row text-center text-md-left justify-content-center">
        <div class="col-xl-8 col-lg-12 mb-5 d-md-flex justify-content-between">
          <div class="avatar mb-md-0 mb-4 mx-4">
            <img
              src="./img/others/Roman_Kornilov_Photo&Video.jpg"
              class="rounded z-depth-1"
              alt="Roman_Kornilov_Photo&Video"
            />
          </div>
          <div class="mx-4">
            <h4 class="font-weight-bold text-uppercase mb-3">Roman Kornilov</h4>
            <h6 class="font-weight-bold grey-text mb-3">Photo & Video</h6>
            <p class="grey-text descript">
              Уходящие моменты легко потерять из виду.
            </p>
            <p class="grey-text descript">
              Они словно исчезают, прежде чем мы сможем их увидеть!
              Я&nbsp;стремлюсь сохранить эти моменты, и создаю продуманные
              образы, чтобы они надолго остались в ваших воспоминаниях.
            </p>
            <p class="grey-text descript">
              Внимательно относясь к деталям, я могу создать красивое
              и&nbsp;уникальное повествование, ведь нас всегда окружает красота,
              и она часто проявляется в простейших формах.
            </p>
            <p class="grey-text descript">
              Мой подход к людям, способность видеть и&nbsp;чувствовать эмоции
              на протяжении всего дня и&nbsp;желание постоянно развиваться стали
              основными элементами в развитии моего&nbsp;стиля.
            </p>
            <a href="https://vk.com/kornilovpro" class="vk-ic mr-3">
              <i class="fa fa-lg fa-vk text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/roman_kornilov/"
              class="ins-ic mr-3"
            >
              <i class="fa fa-lg fa-instagram text-white"> </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
