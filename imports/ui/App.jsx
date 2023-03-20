import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import { ItemsList } from './items/ItemsList';
import { ContainersList } from './containers/ContainersList';
import { LocationsList } from './locations/locationsList.js';
import { TradeLogsList } from './TradeLogs/TradeLogs.js';
import { OwnersList } from './Owners/Owners.js';
export const App = () => (
  <div>
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
      <h1>Welcome to Meteor!</h1>
      <ItemsList/>
      <ContainersList />
      <LocationsList />
      <TradeLogsList />
      <OwnersList />
    </ThemeProvider>
  </div>
);
