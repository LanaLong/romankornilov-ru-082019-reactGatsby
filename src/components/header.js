import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1E1F1C`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.5rem 1.0875rem`,
      }}
    >
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            [ {siteTitle} ]
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Link style={{ color: `white` }} to="/portrait/">
              portrait
            </Link>
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                fontFamily: `sans-serif`,
                padding: `0 10px`,
              }}
              to="/reportage/"
            >
              reportage
            </Link>
            <Link style={{ color: `white` }} to="/video/">
              video
            </Link>
            <Link style={{ color: `white` }} to="/about/">
              about
            </Link>
            {/* <Link style={{ color: `white` }} to="/price/">
              price
            </Link> */}
            <Link style={{ color: `white` }} to="/contacts/">
              contacts
            </Link>
          </Nav>
          <span className="navbar-text ml-auto mr-3">
            <a href="tel:+79055569407" style={{ color: `white` }}>
              +7 (905) 556 94 07
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/roman_kornilov/"
              className="ins-ic mr-3"
            >
              <i className="fa fa-lg fa-instagram text-white"></i>
            </a>
            <a href="https://vk.com/kornilovpro" className="vk-ic mr-3">
              <i className="fa fa-lg fa-vk text-white"> </i>
            </a>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
