import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MenuFoldOutlined,

  HomeOutlined,
  PlayCircleOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined

} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import './Navbar.css'

import type { MenuProps } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/">Inicio</NavLink>, '1', <HomeOutlined/>),
  getItem(<NavLink to="/artri/game">Jugar</NavLink>, '2', <PlayCircleOutlined />),
  getItem(<NavLink to="/artri/repository">Repositorio</NavLink>, '3', <MenuFoldOutlined />),
  getItem(<NavLink to="/artri/statistics">Estadísticas</NavLink>, '4', <BarChartOutlined />),


  getItem(<NavLink to="/artri/configuration">Configuración</NavLink>, '5', <SettingOutlined />),
  getItem(<NavLink to="/artri/login">Salir</NavLink>, '6', <LogoutOutlined />),
  
];
const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
        <div className="logo" />
        <Menu className='vertical-menu'
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['1']}
          items={items}
        
        />
    </div>

  );
};

export default Navbar;
