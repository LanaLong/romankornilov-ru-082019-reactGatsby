import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import ControlledCarousel from "../components/carousel"
import SliderMdb from "../components/sliderMdb"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <ControlledCarousel /> */}
    <SliderMdb />

    <section className="team-section my-5">
      <div className="row text-center text-md-left justify-content-center pt-5">
        <div className="col-xl-8 col-lg-12 mb-5 d-md-flex justify-content-between">
          <div className="avatar mb-md-0 mb-4 mx-4">
            <img
              src="../images/others/Roman_Kornilov_Photo&Video.jpg"
              className="z-depth-1"
              alt="Roman_Kornilov_Photo&Video"
            />
          </div>
          <div className="mx-4">
            <h4 className="avatar-h font-weight-bold text-uppercase text-light mb-3">
              Roman Kornilov
            </h4>
            <h6 className="avatar-h font-weight-bold grey-text mb-3">
              Photo & Video
            </h6>
            <p className="grey-text descript">
              Уходящие моменты легко потерять из виду.
            </p>
            <p className="grey-text descript">
              Они словно исчезают, прежде чем мы сможем их увидеть!
              Я&nbsp;стремлюсь сохранить эти моменты, и&nbsp;создаю продуманные
              образы, чтобы они надолго остались в ваших воспоминаниях.
            </p>
            <p className="grey-text descript">
              Внимательно относясь к деталям, я могу создать красивое
              и&nbsp;уникальное повествование, ведь нас всегда окружает красота,
              и она часто проявляется в простейших формах.
            </p>
            <p className="grey-text descript">
              Мой подход к людям, способность видеть и&nbsp;чувствовать эмоции
              на протяжении всего дня и&nbsp;желание постоянно развиваться стали
              основными элементами в развитии моего&nbsp;стиля.
            </p>

            <a href="https://vk.com/kornilovpro" className="vk-ic mr-3">
              <i className="fa fa-lg fa-vk text-white"> </i>
            </a>
            <a
              href="https://www.instagram.com/roman_kornilov/"
              className="ins-ic mr-3"
            >
              <i className="fa fa-lg fa-instagram text-white"> </i>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Working process */}

    <h1 className="text-uppercase text-center mb-4">
      Workout / Рабочий процесс
    </h1>
    <div
      id="carousel-with-lb"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <div className="carousel-inner mdb-lightbox" role="listbox">
        <div id="mdb-lightbox-ui"></div>
        <div className=" carousel-item active text-center">
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_1.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_1.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_6.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_6.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_3.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_3.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_4.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_4.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_5.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_5.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_2.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_2.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
        </div>
        <div className="carousel-item text-center">
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_6.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_6.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_3.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_3.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_2.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_2.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_5.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_4.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_1.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_1.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_5.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_5.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
        </div>
        <div className="carousel-item text-center">
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_3.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_3.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_2.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_2.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_1.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_1.jpg"
                className="img-fluid"
              />
            </a>
          </figure>

          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_4.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_4.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_6.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_6.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
          <figure className="col-md-4 d-md-inline-block">
            <a
              href="../images/workout/workout_112018_5.jpg"
              data-size="1920x1280"
            >
              <img
                alt="Workout"
                src="../images/workout/workout_112018_5.jpg"
                className="img-fluid"
              />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
