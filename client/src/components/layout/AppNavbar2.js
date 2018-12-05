import React, { Component } from "react";
import { Navbar, NavbarToggler, Container, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";

class AppNavbar2 extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <Link to="/">
              A Makers Company
            </Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar2;
