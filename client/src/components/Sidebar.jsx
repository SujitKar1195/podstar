import React from 'react';
import styled from 'styled-components';
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  FavoriteRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
  CloudUploadRounded,
} from '@mui/icons-material';
import LogoImage from '../Images/Logo.png';
import {Link} from 'react-router-dom';

const MenuContainer = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  height: 100vh;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({menuOpen}) => (menuOpen ? '0' : '-100%')};
    transition: left 0.5s ease-in-out;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;

const Logo = styled.div`
  color: ${({theme}) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: bold;
  margin: 16px 0;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({theme}) => theme.text_secondary};

  &:hover {
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
    background-color: ${({theme}) => theme.text_secondary + 50};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

const Image = styled.img`
  height: 40px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Sidebar = ({menuOpen, setMenuOpen, setDarkMode, darkMode}) => {
  const menuItems = [
    {
      name: 'Dashboard',
      icon: <HomeRounded />,
      link: '/',
    },
    {
      name: 'Search',
      icon: <SearchRounded />,
      link: '/search',
    },
    {
      name: 'Favourites',
      icon: <FavoriteRounded />,
      link: '/favourites',
    },
  ];

  const buttons = [
    {
      name: 'Upload',
      icon: <CloudUploadRounded />,
      link: '/upload',
      func: () => {
        console.log('Upload');
      },
    },
    {
      name: darkMode ? 'LightMode' : 'DarkMode',
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,

      link: '/lightmode',
      func: () => {
        setDarkMode(!darkMode);
      },
    },
    {
      name: 'Log out',
      icon: <LogoutRounded />,
      link: '/logout',
      func: () => {
        console.log('Log out');
      },
    },
  ];
  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          PODSTAR
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems &&
        menuItems.map((item, index) => (
          <StyledLink
            to={item.link}
            key={index}
          >
            <Elements>
              {item.icon}
              <NavText>{item.name}</NavText>
            </Elements>
          </StyledLink>
        ))}
      <HR />
      {buttons &&
        buttons.map((item, index) => (
          <Elements
            onClick={() => item.func()}
            key={index}
          >
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        ))}
    </MenuContainer>
  );
};

export default Sidebar;
