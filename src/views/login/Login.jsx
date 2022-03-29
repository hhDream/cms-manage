/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 15:34:33
 * @LastEditTime: 2022-03-29 16:39:42
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import './login.scss';
import { Form, Input, Button } from 'antd';

import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import { login } from '../api/base';
const Login = () => {
    const onFinish = (values) => {
        login(...values).then(res=>{
            console.log('res :>> ', res);
        })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div className='login_page'>
            <div className='login_box'>
                <img className='login_box__header' src='http://xiaodeyun.oss-cn-hangzhou.aliyuncs.com/100000/20210326/202103261016569537761.jpg'></img>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号',
                            },
                        ]}
                    >
                        <Input  prefix={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" block htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
