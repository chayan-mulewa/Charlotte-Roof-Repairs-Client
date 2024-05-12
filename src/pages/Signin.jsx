import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Typography, Space, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, GoogleOutlined } from '@ant-design/icons';
import { IsValidToken } from '../utils/index';
import { Server, app } from '../config/index';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import image1 from '../assets/images/image1.jpg'
import axios from 'axios';
const Signin = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (document.cookie.includes('token')) {
                    const isValidTokenResult = await IsValidToken();
                    if (!isValidTokenResult) {
                        navigate('/signin');
                    } else {
                        navigate('/');
                    }
                } else {
                    navigate('/signin');
                }
            } catch (error) {
                navigate('/signin');
            }
        };
        fetchData();
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        setIsLoading(true);
        try {

            const response = await axios.post(Server.authURL + '/signin', {
                username: username,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 200) {
                setUsername('');
                setPassword('');

                const token = response.data.token;

                document.cookie = `token=${token}; path=/`;

                navigate('/welcome');

                return;
            }
        } catch (error) {
            const { data } = error.response;
            if (data.error === 'username') {
                form.setFields([
                    { name: 'username', errors: [data.message] }
                ]);
            } else if (data.error === 'password') {
                form.setFields([
                    { name: 'password', errors: [data.message] }
                ]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setIsLoading(true);

        const res = await signInWithPopup(firebaseAuth, provider);

        try {

            const response = await axios.post(Server.authURL + '/signinWithGoogle', {
                full_name: res.user.displayName,
                email: res.user.email,
                token: res.user.accessToken
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 200) {
                setUsername('');
                setPassword('');

                const token = response.data.token;

                document.cookie = `token=${token}; path=/`;

                navigate('/welcome');

                return;
            }
        } catch (error) {
            const { data } = error.response;
            if (data.error === 'username') {
                form.setFields([
                    { name: 'username', errors: [data.message] }
                ]);
            } else if (data.error === 'password') {
                form.setFields([
                    { name: 'password', errors: [data.message] }
                ]);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} >
            <Form form={form} onFinish={handleSubmit}>
                <div style={{ width: 300, padding: '2rem', border: '1px solid #d9d9d9', borderRadius: '2px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <Typography.Title level={4}>Sign In</Typography.Title>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input placeholder='Username' />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password placeholder='Password' iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} />
                    </Form.Item>
                    <div className='w-full flex flex-col gap-6 justify-center items-center text-center' >
                        <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={isLoading} >{!isLoading && 'Sign In'}</Button>
                        <Button style={{ width: '100%' }} onClick={() => navigate('/reset-password')}>Forget Password</Button>
                        <Typography.Text>Or</Typography.Text>
                        <Button type='primary' className='w-full flex justify-center items-center' onClick={() => navigate('/signup')}>Sign Up</Button>
                        <Button type='primary' className='h-full w-full flex justify-center items-center text-center' onClick={handleGoogleSignup}><GoogleOutlined />Google</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Signin;
