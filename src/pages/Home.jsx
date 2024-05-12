import { useEffect, useRef } from 'react';
import { Header, Footer } from '../components/index';
import { Layout, Button, Typography, Row, Col } from 'antd';
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'
import image12 from '../assets/images/image12.png'
import image13 from '../assets/images/image13.png'
import image14 from '../assets/images/image14.png'
import image15 from '../assets/images/image15.png'

const { Content } = Layout;
const { Title } = Typography;

function Home() {

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
            <Title style={{ color: 'white' }}>Charlotte Roof Repairs</Title>
            <Title level={4} style={{ color: 'white' }}>Charlotte Roof Repair Specialist</Title>
          </div>
          <div className='min-h-screen h-fit w-full bg-white text-black flex flex-col gap-4 text-center justify-between px-4 py-4 items-center md:px-44'>
            <div><Title>#1 Charlotte Roof Repair Company </Title></div>
            <div><Button style={{ height: 'auto', backgroundColor: '#0085ca', fontSize: '1.3rem' }}>CLICK TO CALL</Button></div>
            <div className='flex flex-col gap-4 md:flex-row'>
              <Row span={12}>
                <img src={image3} />
              </Row>
              <Row span={12}>
                <img src={image2} />
              </Row>
            </div>
            <div><Title level={5} className='text-start'>Experiencing damage to your roof in Charlotte, NC can be overwhelming, but with Charlotte Roof Repairs, you're in capable hands! Our professional services ensure efficient repairs that address the issue thoroughly, restoring your roof to its optimal security and aesthetic appeal. Whether it's weather damage, wear and tear, or a persistent leak, we're the go-to experts for roofing repairs in Charlotte!</Title></div>
          </div>
          <div style={{ backgroundColor: '#0085ca' }} className='h-fit w-full text-black flex flex-col gap-4 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <div className='flex flex-col gap-4 justify-center items-cente md:flex-row'>
              <div className='w-full flex flex-col gap-4 text-start'>
                <div><Title level={2}>About</Title></div>
                <div><Title level={5}>About As the premier choice for Charlotte roof repairs, we are dedicated to meeting all your roofing needs. Regardless of the cause, our team can swiftly and affordably handle the necessary repairs, prioritizing the safety and comfort of your home. We understand the stress that comes with a damaged roof, and that's why we offer a fast response, catering to both emergencies and scheduled appointments. With years of experience, our highly skilled team ensures top-notch roof repairs that stand the test of time. </Title></div>
              </div>
              <div className='flex flex-col gap-4 justify-center items-cente text-center'>
                <div><Title level={4}>Online Clients Options</Title></div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <Button style={{ backgroundColor: 'black', color: 'white' }}>Scheduled a Free Inspection</Button>
                  <Button style={{ backgroundColor: 'black', color: 'white' }}>Instant Full Roof Estimate</Button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white' }} className='h-fit w-full text-black flex flex-col gap-4 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <div className='flex flex-row'>
              <div className='w-full flex flex-col gap-4 text-start'>
                <div><Title level={2}>Our Services</Title></div>
                <div><Title level={5}>Our Services Offering comprehensive roofing services to the Charlotte, NC community, we understand the unique needs of each project. Our expert team employs advanced methods, high-quality materials, and professional equipment to tailor custom roofing repairs that address specific issues. Whether your roof has suffered wind or hail damage, our skilled professionals work diligently to provide swift and enduring solutions. We specialize in working with diverse roofing materials, including metal, asphalt shingle, and more. Trust us for top-notch roofing services in Charlotte, NC, with a commitment to quality and customer satisfaction.</Title></div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#bfc0bf' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image4} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Asphalt Shingle Roof Repair</Title></div>
              <div className='text-start' ><Title level={5}>Asphalt shingle roofing remains the leading choice for homeowners in Charlotte NC, thanks to its remarkable durability. However, in the event of damage, it's crucial to act quickly. Our professional roof repair company is here to help safeguard your home from the elements and ensure the safety of your loved ones. We're dedicated to enhancing the safety of roofing in our communities. Contact us today, and our team of experts will respond promptly to provide top-notch assistance with all your Charlotte roof repair needs, including shingle replacement, leak repair, and more. Trust us to keep your roof in top condition!</Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#bfc0bf' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image5} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Chimney Flashing Repair</Title></div>
              <div className='text-start' ><Title level={5}>Discover why chimney flashing fails and how Charlotte Roof Repairs provides swift solutions. Over time, exposure to weather elements causes flashing deterioration, leading to leaks. Our expert team in Charlotte, NC, excels in rapid assessment and efficient repairs, addressing issues promptly. Trust us for quick, reliable remedies that fortify your chimney, ensuring lasting protection against leaks. Experience efficient solutions with Charlotte Roof Repairs—your trusted partner in restoring chimney flashing integrity. </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image6} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Metal Roof Repairs</Title></div>
              <div className='text-start' ><Title level={5}>Metal roofs stand as excellent, durable options, capable of lasting up to a century with proper maintenance. To ensure the safety of you and your property, reach out to us for an inspection to verify its secure installation and address any necessary repairs promptly. Damage can occur for various reasons, but as long as you act promptly to address issues, repairs to metal roofs are typically straightforward tasks that our team can handle efficiently and effectively. </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image7} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Wind Damage Roof Repair</Title></div>
              <div className='text-start' ><Title level={5}>Wind Damage Roof Repair Wind possesses significant volatility and has the potential to inflict substantial damage on your roof. Regularly maintaining and inspecting not only your roof but also surrounding elements like trees and unsecured objects is crucial. This practice ensures that you can have confidence in your safety, knowing that you are fully protected in the face of extreme wind conditions.</Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#0085ca' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image8} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Hail Damage Roof Repair</Title></div>
              <div className='text-start' ><Title level={5}>Hail has the potential to inflict substantial damage. To mitigate this risk, it's essential to maintain your roof in excellent condition initially and promptly address any issues to prevent further deterioration. The specific type and material of your roof will determine the nature of potential damage and the necessary repairs. For effective solutions to hail damage, trust Spokane Roof Repair, your local experts who can address and resolve these issues efficiently.</Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#0085ca' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image9} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Flat Roof Repair</Title></div>
              <div className='text-start' ><Title level={5}>Flat Roof Repair Various factors can pose a risk to your flat roof, such as inadequate drainage systems, improper installation, or harsh weather conditions. Our skilled team is adept at addressing any damage and restoring your roof to its safest state. Following a comprehensive assessment, we will implement all required measures to prevent the issue from recurring, ensuring your complete weatherproofing. At the forefront of our priorities is safeguarding you in your home! </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#bfc0bf' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image10} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Slate/Tile Roof Repair</Title></div>
              <div className='text-start' ><Title level={5}>Slate and tile shingles stand out as preferred roofing materials for homeowners in North America due to their exceptional durability. However, when damage occurs, swift action is essential. Our professional roof repair company is ready to protect your home from the elements and prioritize the safety of your loved ones. Committed to advancing roofing safety in our communities, we encourage you to reach out. Our team of experts is poised to respond promptly, offering top-tier assistance with all your Charlotte roof repair requirements, such as shingle replacement, leak repair, and more. Rely on us to ensure your slate or tile shingle roof remains in optimal condition! </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#bfc0bf' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <img className='h-full w-full md:h-2/6 md:w-2/6' src={image11} alt="" />
            <div className='w-full flex flex-col gap-4 text-center'>
              <div><Title level={2}>Roof Leak Repair</Title></div>
              <div className='text-start' ><Title level={5}>Experiencing a leaking roof can be distressing, but with our services, you can rest assured that we will respond promptly and work efficiently to effectively address your issue. Our aim is to minimize stress for you, so we've established a streamlined system for easy booking, swift responses, and deployment of a highly skilled workforce. Trust us to quickly and expertly perform any necessary repairs, making the situation as hassle-free as possible for you. </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44 md:flex-row'>
            <div className='flex gap-4 justify-center items-center flex-col '>
              <div><img className='h-full w-full' src={image12} alt="" /></div>
              <div className='w-full flex flex-col gap-4 text-center'><Title level={5}>BBB-accredited roofing excellence! Trust our certified team for top-tier roof repairs, installations, and inspections. Choose reliability, transparency, and quality. Contact us for peace of mind today </Title></div>
            </div>
            <div className='flex justify-center items-center flex-col '>
              <div><img className='h-full w-ful' src={image13} alt="" /></div>
              <div className='w-full flex flex-col gap-4 text-center'><Title level={5}>Nextdoor-recommended roofing experts! Trust us for top-notch roof services – repairs, installations, and inspections. Your neighbors approve, and so do we! Contact us for reliable excellence today! </Title></div>
            </div>
            <div className='flex justify-center items-center flex-col '>
              <div><img className='h-full w-full' src={image14} alt="" /></div>
              <div className='w-full flex flex-col gap-4 text-center'><Title level={5}>Directorii app-approved roofing experts! Choose us for top-tier roof services – repairs, installations, inspections. Your satisfaction guaranteed! Contact us for excellence today! </Title></div>
            </div>
          </div>
          <div style={{ backgroundColor: '#bfc0bf' }} className='h-fit w-full text-black flex flex-col gap-6 text-center justify-between px-4 py-4 items-center md:px-44'>
            <div className='text-center'><Title level={1}>Roof Repairs Financing Options</Title></div>
            <div className='h-full w-full flex flex-col gap-16 justify-between items-center md:flex-row'>
              <div className=' w-full flex flex-col gap-4 justify-center items-cente text-center'>
                <div><Title level={4}>Online Clients Options</Title></div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <Button style={{ backgroundColor: 'black', color: 'white' }}>Scheduled a Free Inspection</Button>
                  <Button style={{ backgroundColor: 'black', color: 'white' }}>Instant Full Roof Estimate</Button>
                </div>
              </div>
              <div>
                <img src={image15} alt="" />
              </div>
              <div className=' w-full flex flex-col gap-4 justify-center items-cente text-start'>
                <div><Title level={5}>Ready for a new roof? Secure your peace of mind today! Pre-apply for hassle-free financing for your upcoming roofing project. Your dream roof is just a click away – take the first step towards a safer, stylish home now!</Title></div>
                <div><Button style={{ backgroundColor: 'black', color: 'white' }}>Apply Tody</Button></div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white' }} className='min-h-full h-full w-full text-black flex flex-col gap-6 text-start justify-center px-4 py-4 items-center md:px-44'>
            <div className='w-full text-start'><Title level={1}>Serving Charlotte, NC, since 2016</Title></div>
            <div className='w-full text-start'><Title level={5}>Charlotte Roof Repairs is your trusted local, family-owned business that has become a cornerstone in the roofing industry. Committed to excellence, we specialize in efficient residential roofing installations, using top-notch materials to ensure your roof stands the test of time. </Title></div>
            <div className='w-full text-start'><Title level={5}>As your local commercial roofing contractors, we proudly serve Charlotte, NC, and surrounding areas, including Matthews , Waxhaw, and Indian Trail. Choose Charlotte Roof Repairs for quality roofing solutions you can rely on</Title></div>
            <div className='h-full w-full justify-center items-center'><iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.150532636305!2d-80.77335694841003!3d35.052975394312156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885427cee6afffff%3A0x21a6d4e1f27e86d2!2s9805%20Sandy%20Rock%20Pl%20Unit%20C-%20204%2C%20Charlotte%2C%20NC%2028277!5e0!3m2!1sen!2sus!4v1715310735684!5m2!1sen!2sus" loading="lazy"></iframe></div>
          </div>
          <Footer />
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
