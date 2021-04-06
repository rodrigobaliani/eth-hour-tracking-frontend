import './NavHeader.css';
import React, { Component } from 'react'
import { Layout, Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';


const { Header } = Layout;

export default class NavHeader extends Component {
    render() {
        return (

            <Header className="container">
                <h2>Factureitor</h2>
                <div className="nav-links">
                    <Button type="primary" shape="round" icon={<UserOutlined />} size="large" style={{ marginLeft: '10px' }} />
                    <Button type="primary" shape="round" icon={<LogoutOutlined />} size="large" style={{ marginLeft: '10px' }} />
                </div>
            </Header >
        )
    }
}
