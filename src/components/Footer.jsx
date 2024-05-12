import { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Button, Typography } from 'antd';
import logo from '../assets/logos/logo.png';


const { Footer: AntFooter } = Layout;
const { Title } = Typography;
function Footer() {
  return (
    <AntFooter className='p-0 overflow-x-hidden'>
      <div style={{ backgroundColor: 'white' }} className='h-fit w-full text-black flex flex-col text-center justify-between px-4 py-4 items-center md:px-44'>
        <div className='h-full w-full flex flex-col py-8 gap-16 justify-between items-center md:flex-row'>
          <div>
            <img className='h-48 w-48' src={logo} alt="" />
          </div>
          <div className='flex flex-col justify-center items-cente text-start'>
            <div><Title level={5}>Charlotte Roof Repairs </Title></div>
            <div><Title level={5}>9805 Sandy Rock Pl Unit C- 204, Charlotte, NC 28277 </Title></div>
            <div><Title level={5}>P: (980) 844-0206 </Title></div>
            <div><Title level={5}>E: CharlotteRoofRepairs@Gmail.com </Title></div>
          </div>
          <div className='flex flex-col gap-4 justify-center items-cente text-center'>
            <div><Title level={4}>Online Clients Options</Title></div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <Button style={{ backgroundColor: 'black', color: 'white' }}>Scheduled a Free Inspection</Button>
              <Button style={{ backgroundColor: 'black', color: 'white' }}>Instant Full Roof Quote</Button>
            </div>
          </div>
        </div>
        <div>
          <div><Title level={5}>*Charlotte Roof Repairs offers free estimates to residential homeowners.
            However, if your home is on the market or involved in a real estate transaction, we do charge a $295 inspection/estimate fee. </Title></div>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
