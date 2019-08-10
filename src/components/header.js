import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      //   marginBottom: `1.45rem`,
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
            {siteTitle}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Link className="headerLink" to="/portrait/">
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
            <Link to="/video/">video</Link>
            <Link to="/about/">about</Link>
            <Link to="/price/">price</Link>
            <Link to="/contacts/">contacts</Link>
          </Nav>
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
