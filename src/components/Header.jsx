import React, { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logos/logo.png';

const { Header: AntHeader } = Layout;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenChange = keys => {
    setOpenKeys(keys);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <AntHeader style={{ width: '100vw', display: 'flex', padding: '0rem 1rem', backgroundColor: isScrolled ? '#0085ca' : 'transparent', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, zIndex: 1, transition: 'background-color 0.2s ease-in-out' }}>
        {
          isMobile ?
            <Menu mode="horizontal" style={{ justifyContent: 'start', alignItems: 'center', flex: 1, backgroundColor: isScrolled ? '#0085ca' : 'transparent', transition: 'background-color 0.2s ease-in-out' }} >
              <Menu.Item key="0" onClick={toggleDrawer}>
                <MenuOutlined />
              </Menu.Item>
              <Menu.Item key="1">
                <Avatar style={{ height: '3rem', width: '3rem' }} src={logo}></Avatar>
              </Menu.Item>
            </Menu>
            :
            <Menu mode="horizontal" style={{ justifyContent: 'start', alignItems: 'center', flex: 1, backgroundColor: isScrolled ? '#0085ca' : 'transparent', transition: 'background-color 0.2s ease-in-out' }} >
              <Menu.Item key="1">
                <Avatar style={{ height: '3rem', width: '3rem' }} src={logo}></Avatar>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">CHARLOTTE ROOF REPAIRS</Link>
              </Menu.Item>
            </Menu>
        }
        <Menu mode="horizontal" style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1, minWidth: 0, backgroundColor: isScrolled ? '#0085ca' : 'transparent', transition: 'background-color 0.2s ease-in-out' }} openKeys={openKeys} onOpenChange={handleOpenChange}>
          {
            !isMobile &&
            <>
              <Menu.Item key="3">
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.SubMenu key="4" title="SERVICES">
                <Menu.Item key="4-1"><Link to="/services/asphalt-shingles-repairs">ASPHALT SHINGLES REPAIRS</Link></Menu.Item>
                <Menu.Item key="4-2"><Link to="/services/metal-roof-repair">METAL ROOF REPAIR</Link></Menu.Item>
                <Menu.Item key="4-3"><Link to="/services/epdm-roof-repair">EPDM ROOF REPAIR</Link></Menu.Item>
                <Menu.Item key="4-4"><Link to="/services/granules-in-gutter">GRANULES IN GUTTER</Link></Menu.Item>
                <Menu.Item key="4-5"><Link to="/services/emergency-roof-tarp-installation">EMERGENCY ROOF TARP INSTALLATION</Link></Menu.Item>
                <Menu.Item key="4-6"><Link to="/services/chimney-repair">CHIMNEY REPAIR</Link></Menu.Item>
                <Menu.Item key="4-7"><Link to="/services/missing-shingles">MISSING SHINGLES</Link></Menu.Item>
                <Menu.Item key="4-8"><Link to="/services/skylight-repairs">SKYLIGHT REPAIRS</Link></Menu.Item>
                <Menu.Item key="4-9"><Link to="/services/roof-satellite-dish-repair">ROOF SATELLITE DISH REPAIR</Link></Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="5">
                <Link to="/blog">BLOG</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/portfolio">PORTFOLIO</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/contact-us">CONTACT US</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/signin">LOGIN</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/signup">SIGNUP</Link>
              </Menu.Item>
            </>
          }
        </Menu>
      </AntHeader>
      <Drawer placement="left" closable={true} onClose={closeDrawer} visible={drawerVisible}>
        <Menu mode="inline" openKeys={openKeys} onOpenChange={handleOpenChange} onClick={closeDrawer}>
          <Menu.Item key="3">
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.SubMenu key="4" title="SERVICES">
            <Menu.Item key="4-1"><Link to="/services/asphalt-shingles-repairs">ASPHALT SHINGLES REPAIRS</Link></Menu.Item>
            <Menu.Item key="4-2"><Link to="/services/metal-roof-repair">METAL ROOF REPAIR</Link></Menu.Item>
            <Menu.Item key="4-3"><Link to="/services/epdm-roof-repair">EPDM ROOF REPAIR</Link></Menu.Item>
            <Menu.Item key="4-4"><Link to="/services/granules-in-gutter">GRANULES IN GUTTER</Link></Menu.Item>
            <Menu.Item key="4-5"><Link to="/services/emergency-roof-tarp-installation">EMERGENCY ROOF TARP INSTALLATION</Link></Menu.Item>
            <Menu.Item key="4-6"><Link to="/services/chimney-repair">CHIMNEY REPAIR</Link></Menu.Item>
            <Menu.Item key="4-7"><Link to="/services/missing-shingles">MISSING SHINGLES</Link></Menu.Item>
            <Menu.Item key="4-8"><Link to="/services/skylight-repairs">SKYLIGHT REPAIRS</Link></Menu.Item>
            <Menu.Item key="4-9"><Link to="/services/roof-satellite-dish-repair">ROOF SATELLITE DISH REPAIR</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="5">
            <Link to="/blog">BLOG</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/portfolio">PORTFOLIO</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/contact-us">CONTACT US</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/signin">LOGIN</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/signup">SIGNUP</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default Header;
