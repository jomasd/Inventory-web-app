import React, { useState } from 'react';
import { ThemeProvider, Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';

export const NavbarMain = () => {
 
  return (
    <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">Inventory Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto justify-content-end ">
        <Nav.Item>
          <Nav.Link href="/items">Items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/containers">containers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/locations">locations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/trade-logs">TradeLogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/owners">owners</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};
