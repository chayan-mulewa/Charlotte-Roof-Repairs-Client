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

function Portfolio() {

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
                        <Title style={{ color: 'white' }}>ROOF PICTURE  PORTFOLIO</Title>
                    </div>
                    <div className='min-h-screen h-fit w-full bg-white text-black flex flex-col gap-8 text-start justify-between px-4 py-4 items-center md:px-44'>
                        <div><Title>Roof Repair In Charlotte Gallery</Title></div>
                        <div><Title level={5}>Welcome to the Charlotte Roof Repairs Gallery—a visual journey through our expertise in roofing solutions across Charlotte, NC. Here, you'll discover a snapshot of our completed projects, showcasing the precision and quality that define our services.</Title></div>
                        <div><Title level={5}>From meticulous repairs to comprehensive replacements, each image reflects our commitment to excellence. Our gallery is a testament to the seamless integration of innovative solutions and top-notch materials, addressing a spectrum of roofing challenges.</Title></div>
                        <div><Title level={5}>Whether you seek inspiration or assurance of our capabilities, this collection offers a glimpse into the transformative impact we've had on residential and commercial roofs in Charlotte. Trust Charlotte Roof Repairs to bring the same dedication and attention to detail to your roofing project. Explore our portfolio, and envision the possibilities for your property. Thank you for considering us—we're excited to deliver a roof that stands the test of time.</Title></div>
                        <div className='h-1/4 w-1/4 gap-4 flex flex-row justify-center'>
                        <div className='h-full w-full'>
                            <Carousel className='h-full w-full' >
                                <div>
                                    <img src={image4} alt="" />
                                </div>
                                <div>
                                    <img src={image5} alt="" />
                                </div>
                                <div>
                                    <img src={image6} alt="" />
                                </div>
                                <div>
                                    <img src={image7} alt="" />
                                </div>
                                <div>
                                    <img src={image8} alt="" />
                                </div>
                            </Carousel>
                        </div>
                        <div className='h-full w-full'>
                            <Carousel className='h-full w-full' >
                                <div>
                                    <img src={image9} alt="" />
                                </div>
                                <div>
                                    <img src={image8} alt="" />
                                </div>
                                <div>
                                    <img src={image7} alt="" />
                                </div>
                                <div>
                                    <img src={image6} alt="" />
                                </div>
                                <div>
                                    <img src={image5} alt="" />
                                </div>
                            </Carousel>
                        </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Portfolio;

