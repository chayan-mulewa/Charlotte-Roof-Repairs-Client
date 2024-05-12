import { useEffect, useRef } from 'react';
import { Header, Footer } from '../components/index';
import { Layout, Button, Typography, Row, Col, Carousel } from 'antd';
import image1 from '../assets/images/image1.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'

const { Content } = Layout;
const { Title } = Typography;

function ContactUS() {

    const parallaxRef = useRef(null);

    useEffect(() => {
        const parallaxEffect = () => {
            if (parallaxRef.current) {
                const scrollTop = window.pageYOffset;
                const parallaxOffset = -(scrollTop * 0.5);
                parallaxRef.current.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
            }
        };
        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);


    return (
        <Layout >
            <Header />
            <Content >
                <div className='h-screen'>
                    <div ref={parallaxRef} className='h-3/5 w-full flex flex-col justify-center items-center text-center' style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed', scrollBehavior: 'smooth' }}>
                        <Title style={{ color: 'white' }}>Contact US</Title>
                    </div>
                    <div className='min-h-screen h-fit w-full bg-white text-black flex flex-col gap-8 text-start justify-between px-4 py-4 items-center md:px-44'>
                        <div><Title level={3}>SIMPLY FILL OUT THE FORM BELOW TO REQUEST A FREE ESTIMATE</Title></div>
                        <div><Title level={5}>Charlotte Roof Repairs is committed in communicating with you in a timely manner. You can contact us anytime by filling out the form below, or simply call one of our offices during business hours. We would be more than happy to discuss your roofing, siding or window replacement projects with you!</Title></div>
                        <div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSenmLVbpn6xalPv0YQ4xPZNRvCI0S3Hv9-KuFmrBpxWs-PjEw/viewform?embedded=true" width={'fit'} height="1150" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>
                        <div className='h-full w-full flex flex-col gap-4 justify-center items-center text-center' >
                            <div><Title level={3}>WE’RE HERE TO TALK. GIVE CHARLOTTE ROOF REPAIR A CALL TODAY!  </Title></div>
                            <div className='w-full flex flex-col md:flex-row justify-between text-start '>
                                <div>
                                    <Title level={4}>CHARLOTTE ROOF REPAIRS CHARLOTTE NC ADDRESS</Title>
                                    <Title level={5}>9805 Sandy Rock Pl, Charlotte, NC 28277</Title>
                                    <Title level={5}>EMAIL: charlotteroofrepairs@gmail.com</Title>
                                    <Title level={5}>PHONE: (980) 844-0206</Title>
                                </div>
                                <div>
                                    <Title level={5}> REGULAR BUSINESS HOURS</Title>
                                    <Title level={5}>MONDAY 9AM – 7PM</Title>
                                    <Title level={5}>TUESDAY 9AM – 7PM</Title>
                                    <Title level={5}>WEDNESDAY 9AM – 7PM</Title>
                                    <Title level={5}>THURSDAY 9AM – 7PM</Title>
                                    <Title level={5}>FRIDAY 9AM – 7PM</Title>
                                    <Title level={5}>SATURDAY 10AM-6PM (OFFICE ONLY)</Title>
                                    <Title level={5}>SUNDAY - CLOSE</Title>

                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default ContactUS;

