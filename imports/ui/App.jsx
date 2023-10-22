import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your components here
import { ItemPage } from './items/ItemPage/ItemPage';
import { ContainerPage } from './containers/ContainerPage/ContainerPage';
import { ItemsList } from './items/ItemsList';
import { ContainersList } from './containers/ContainersList';
import { LocationsList } from './locations/locationsList';
import { TradeLogsList } from './TradeLogs/TradeLogs';
import { OwnersList } from './Owners/Owners';
import InventoryPage from './Inventory/Inventory';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" />
          {/* You can add a navigation menu here if needed */}
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="0" icon={<LaptopOutlined />}><Link to="/">Dashboard</Link></Menu.Item>
              <Menu.Item key="6" icon={<LaptopOutlined />}><Link to="/inventory">Inventory</Link></Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Main Navigation">
                <Menu.Item key="1"><Link to="/items">Items</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/containers">Containers</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/locations">Locations</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/trade-logs">Trade Logs</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/owners">Owners</Link></Menu.Item>
              </SubMenu>
              {/* More submenus or items can be added here */}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* Breadcrumb items */}
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<ItemsList />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/items" element={<ItemsList />} />
                <Route path="/items/:itemId" element={<ItemPage />} />
                <Route path="/containers" element={<ContainersList />} />
                <Route path="/containers/:containerId" element={<ContainerPage />} />
                <Route path="/locations" element={<LocationsList />} />
                <Route path="/trade-logs" element={<TradeLogsList />} />
                <Route path="/owners" element={<OwnersList />} />
                {/* More routes can be added here */}
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
