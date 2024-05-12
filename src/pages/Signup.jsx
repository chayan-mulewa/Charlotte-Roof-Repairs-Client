import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Form, Input, Button, Avatar, Upload, message, Space } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, GoogleOutlined } from '@ant-design/icons';
import { IsValidToken, OTPGenerator } from '../utils/index';
import { Server, app } from '../config/index';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import image1 from '../assets/images/image1.jpg'
import axios from 'axios';

const { Title } = Typography;

const SignUp = () => {

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (document.cookie.includes('token')) {
          const isValidTokenResult = await IsValidToken();
          if (!isValidTokenResult) {
            navigate('/signup');
          } else {
            navigate('/');
          }
        } else {
          navigate('/signup');
        }
      } catch (error) {
        navigate('/signup');
      }
    };
    fetchData();
  }, []);


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');

  const handleSendOTP = async () => {
    setIsLoading(true);
    try {
      const OTP = OTPGenerator();
      setGeneratedOTP(OTP);

      const sendOTPResult = await axios.post(Server.authURL + "/sendOTP", {
        companyName: 'Charlotte Roof Repairs',
        title: 'Email Conformation',
        email: email,
        otp: OTP
      }, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (sendOTPResult.status == 200) {
        setStep(2);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    setStep(1);

    if (generatedOTP != otp) {
      form.setFields([
        { name: 'otp', errors: ['Please Enter Valid OTP'] }
      ]);
      return;
    }
    try {
      const response = await axios.post(Server.authURL + '/signup', {
        full_name: fullName,
        email: email,
        username: username,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.status === 201) {

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
      } else if (data.error === 'email') {
        form.setFields([
          { name: 'email', errors: [data.message] }
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
      {
        step === 1 &&
        <>
          <Form form={form} onFinish={handleSendOTP}>
            <div style={{ width: 300, padding: '2rem', border: '1px solid #d9d9d9', borderRadius: '2px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Title level={2}>Sign Up</Title>
              <Form.Item name="full_name" rules={[{ required: true, message: 'Please input your full name!' }]}>
                <Input placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} />
              </Form.Item>
              <Form.Item>
                <div className='w-full flex flex-col gap-6 justify-center items-center text-center' >
                  <Button type="primary" className='w-full' htmlType="submit" loading={isLoading}>{!isLoading && 'Sign Up'}</Button>
                  <Typography.Text>Or</Typography.Text>
                  <Button type='primary' className='w-full' onClick={() => navigate('/signin')}>Sign In</Button>
                  <Button type='primary' className='h-full w-full flex justify-center items-center text-center' onClick={handleGoogleSignup}><GoogleOutlined />Google</Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </>
      }
      {
        step === 2 &&
        <>
          <Form form={form} onFinish={handleSubmit}>
            <div style={{ width: 300, padding: '2rem', border: '1px solid #d9d9d9', borderRadius: '2px', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Title level={3}>Email Conformation</Title>
              <Form.Item name="otp" rules={[{ required: true, message: 'Please Enter Valid OTP' }]}>
                <Input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <div className='w-full flex flex-col gap-6 justify-center items-center text-center' >
                  <Button type="primary" className='w-full' htmlType="submit">Submit</Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </>
      }
    </div>
  );
};

export default SignUp;
