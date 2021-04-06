import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, ProjectOutlined, TeamOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Sider } = Layout;

export default class Sidebar extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ProjectOutlined />}>
                        <Link to="/projects">Proyectos</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TeamOutlined />}>
                        <Link to="/employees">Empleados</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ClockCircleOutlined />}>
                        <Link to="/hours">Horas</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
