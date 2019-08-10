import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

const FooterPage = () => {
  return (
    <div style={{ backgroundColor: `#1E1F1C` }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem .5rem`,
          paddingTop: 0,
          color: `white`,
        }}
      >
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <h5 className="title">ROMAN KORNILOV</h5>
                <p>Photo & Video</p>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title text-center">КОНТАКТЫ</h5>
                <ul className="text-center">
                  <li className="list-unstyled">
                    <a href="tel:+79055569407" style={{ color: `white` }}>
                      +7 (905) 556 94 07
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a
                      href="mailto:kornilov.business@gmail.com"
                      style={{ color: `white` }}
                    >
                      kornilov.business@gmail.com
                    </a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title text-center text-md-right">Я ОНЛАЙН:</h5>
                <ul className="list-inline list-unstyled my-0">
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/roman_kornilov/"
                      className="ins-ic mr-3"
                    >
                      <i className="fa fa-lg fa-instagram text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://vk.com/kornilovpro" className="vk-ic mr-3">
                      <i className="fa fa-lg fa-vk text-white"> </i>
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid style={{ color: `grey` }}>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https:\\romankornilov.ru" style={{ color: `grey` }}>
                {" "}
                Roman Kornilov. PhotoArt&nbsp;Production.
              </a>{" "}
              All right reserved.
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  )
}

export default FooterPage
