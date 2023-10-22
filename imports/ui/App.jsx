import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import { ItemsList } from './items/ItemsList';
import { ContainersList } from './containers/ContainersList';
import { LocationsList } from './locations/locationsList.js';
import { TradeLogsList } from './TradeLogs/TradeLogs.js';
import { OwnersList } from './Owners/Owners.js';
// Import required components from react-router-dom
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { NavbarMain } from './Navbar/navbarMain';
import { ItemPage } from './items/ItemPage/ItemPage';
import { ContainerPage } from './containers/ContainerPage/ContainerPage';


export const App = () => (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <NavbarMain />
      <Router>
        <Container fluid>
          <Routes>
            <Route path="/items" element={<ItemsList/>} />
            <Route path="/items/:itemId" element={<ItemPage/>} />
            <Route path="/containers" element={<ContainersList/>} />
            <Route path="/containers/:containerId" element={<ContainerPage/>} />
            <Route path="/locations" element={<LocationsList/>} />
            <Route path="/trade-logs" element={<TradeLogsList/>} />
            <Route path="/owners" element={<OwnersList/>} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
);
