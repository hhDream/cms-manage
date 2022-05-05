import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import './Layout.less';
import LeftMenu from './menu/LeftMenu';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
const LayoutBox = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout>
            <Sider collapsedWidth={63} trigger={null} collapsible collapsed={collapsed}>
                <div className='logo_box'>
                <img className='logo' alt='logo' src='http://xiaodeyun.oss-cn-hangzhou.aliyuncs.com/100000/20210326/202103261016569537761.jpg' />
                </div>
                <LeftMenu />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    {props.content || ''}
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutBox;