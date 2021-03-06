import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const VideoPage = () => (
  <Layout>
    <SEO title="Роман Корнилов — Видео" />
    {/* <!-- Video --> */}
    <div
      style={{
        background: `#333`,
      }}
    >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Roman Kornilov — Video"
          className="embed-responsive-item"
          src="https://player.vimeo.com/video/305224909"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/305224909">Video Academy Backstage</a> from{" "}
          <a href="https://vimeo.com/romankornilov">Роман Корнилов</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
      {/* <!-- /Video --> */}
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <a
            href="https://vimeo.com/romankornilov"
            className="vimeo-link text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-outline-primary btn-rounded waves-effect text-center"
              aria-pressed="true"
            >
              <h6 className="add text-white text-center pt-2 px-3">
                Другие видео на &nbsp;&nbsp;
                <i className="fa fa-vimeo" aria-hidden="true"></i> &nbsp;Vimeo
              </h6>
            </button>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default VideoPage
