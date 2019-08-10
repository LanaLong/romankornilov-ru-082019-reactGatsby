import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

const FooterPage = () => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">ROMAN KORNILOV Photo & Video</h5>
              <p></p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">КОНТАКТЫ</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="tel:+79055569407">+7 (905) 556 94 07</a>
                </li>
                <li className="list-unstyled">
                  <a href="mailto:kornilov.business@gmail.com">
                    kornilov.business@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https:\\romankornilov.ru"> Roman Kornilov. PhotoArt.</a>{" "}
            All right reserved.
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

export default FooterPage
