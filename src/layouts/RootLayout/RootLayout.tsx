import React, { useState } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    PlayCircleOutlined,
    BarChartOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, NavLink } from "react-router-dom"

const { Header, Sider, Content } = Layout;
const menuStyle:React.CSSProperties={
  display:'flex',
  alignContent:'center',
  flexWrap: 'wrap',
  height:'75vh',
  margin:0,
  fontSize:'20px'

}
const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{width:'100%', justifyContent:'center', display:'flex', marginTop:'2em'}}>
          <img src='/src/assets/logosimplify.png' style={{width:'50px', height:'50px', borderRadius:'100%'}}/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={menuStyle}
          items={[
            {
              key: '1',
              icon: <HomeOutlined style={{fontSize:'20px'}}/>,
              label: (<NavLink to="/">Inicio</NavLink>),
              
            },
            {
              key: '2',
              icon: <PlayCircleOutlined style={{fontSize:'20px'}}/>,
              label: (<NavLink to="/artri/game">Jugar</NavLink>),
            },
            {
              key: '3',
              icon: <MenuFoldOutlined style={{fontSize:'20px'}}/>,
              label: (<NavLink to="/artri/repository">Repositorio</NavLink>),
            },
            {
                key: '4',
                icon: <BarChartOutlined style={{fontSize:'20px'}}/>,
                label: (<NavLink to="/artri/statistics">Estadísticas</NavLink>),
            },
              
            {
              key: '5',
              icon: <SettingOutlined style={{fontSize:'20px'}}/>,
              label: (<NavLink to="/artri/configuration">Configuración</NavLink>),
            },
            {
              key: '6',
              icon: <LogoutOutlined style={{fontSize:'20px'}}/>,
              label: (<NavLink to="/artri/login">Salir</NavLink>)
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;