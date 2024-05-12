import { useEffect, useRef } from 'react';
import { Header, Footer } from '../components/index';
import { Layout, Button, Typography, Row, Col } from 'antd';
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

function Blog() {

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
            <Title style={{ color: 'white' }}>ROOF REPAIR BLOGS</Title>
          </div>
          <div className='min-h-screen h-fit w-full bg-white text-black flex flex-col gap-4 text-center justify-between px-4 py-4 items-center md:px-44'>
            <div><Title>ROOF REPAIR BLOGS</Title></div>
            <div className='h-full w-full gap-4 grid grid-cols-1 md:grid-cols-3'>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image4} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image5} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image6} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image7} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image8} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image9} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image10} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
              <div className='h-full w-full'>
                <div><img className='h-full w-full' src={image11} alt="" /></div>
                <div><Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laborum excepturi at nesciunt quia impedit commodi asperiores</Title></div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Blog;
