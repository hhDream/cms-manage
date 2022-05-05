/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 15:34:33
 * @LastEditTime: 2022-03-31 11:39:27
 * @LastEditors: Fenghua Zhang
 */
import React ,{useState} from 'react';
import './login.less';
import { Form, Input, Button } from 'antd';

import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import { login } from '@/api/base';
import { message } from 'antd';
import userAction  from '@/store/user/actions';
import { useNavigate } from 'react-router-dom';
const Login = (prop) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true)
        login(values).then(res=>{
            userAction.changeUserInfo(res.data)
            message.success('登录成功');
            navigate('/home')
        })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


    return (
        <div className='login_page'>
            <div className='login_box'>
                <img className='login_box__header' alt='logo' src='http://xiaodeyun.oss-cn-hangzhou.aliyuncs.com/100000/20210326/202103261016569537761.jpg'></img>
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
                        <Button  loading={loading} type="primary" block htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
