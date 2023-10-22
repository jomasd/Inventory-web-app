import React, { useState } from 'react';
import { MDCDrawer } from '@material/drawer';
import { MDCList } from '@material/list';
import { MDCIconButtonToggle } from '@material/icon-button';

const ResponsiveNavigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = window.innerWidth <= 600; // Basic media query logic

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {isMobile ? (
        <MDCIconButtonToggle
          onClick={toggleDrawer}
          aria-label="Menu"
          aria-hidden="true"
          aria-pressed="false"
          icon="menu"
        />
      ) : (
        <MDCDrawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <MDCList>
            <li className="mdc-list-item" role="menuitem">
              <span className="mdc-list-item__text">Items</span>
            </li>
            <li className="mdc-list-item" role="menuitem">
              <span className="mdc-list-item__text">Containers</span>
            </li>
            {/* ... other items ... */}
          </MDCList>
        </MDCDrawer>
      )}
    </div>
  );
};

export default ResponsiveNavigation;
