import React from "react"
import PropTypes from "prop-types"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #1e1f1c;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
`

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 0px 1.0875rem 0.5rem;
`
const Title = styled.h5`
  text-transform: uppercase;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <Title>Roman Kornilov</Title>
                <p>Photo & Video</p>
              </MDBCol>
              <MDBCol md="4">
                <Title className="text-center">Контакты</Title>
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
                <Title className="text-center text-md-right">Я онлайн:</Title>
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
          <div
            className="footer-copyright text-center py-3"
            // style={{ backgroundColor: `#1A1A1A` }}
          >
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
      </Container>
    </Wrapper>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
