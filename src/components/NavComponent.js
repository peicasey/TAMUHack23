import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../assets/CarryOn_Logo.png'; // gives image path

const NavComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/" className="me-auto" color="light">
          <img src={logo} alt="CarryOn Logo" width="125" height="50"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/' color="light">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/newtrip' color="light">New Trip</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/resources' color="light">Resources</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComponent;