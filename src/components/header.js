import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #1e1f1c;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  text-transform: uppercase;
`
const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 0.5rem 1.0875rem;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
  text-decoration: none;
  padding-right: 15px;
  font-size: 0.9rem;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
  }
`
const StyledA = styled.a`
  color: #fff;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper style={{}}>
    <Container>
      <Navbar expand="lg">
        {/* <Navbar.Brand> */}
        <StyledLink to="/">[ {siteTitle} ]</StyledLink>
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center m-auto">
            <StyledLink to="/portrait/">портрет</StyledLink>
            <StyledLink to="/reportage/">репортаж</StyledLink>
            <StyledLink to="/video/">видео</StyledLink>
            <StyledLink to="/about/">обо мне</StyledLink>
            <StyledLink to="/contacts/">контакты</StyledLink>
          </Nav>
          <StyledA href="tel:+79055569407">+7 (905) 556 94 07</StyledA>
          <a
            href="https://www.instagram.com/roman_kornilov/"
            className="ins-ic mr-3"
          >
            <i className="fa fa-lg fa-instagram text-white"></i>
          </a>
          <a href="https://vk.com/kornilovpro" className="vk-ic mr-3">
            <i className="fa fa-lg fa-vk text-white"> </i>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
