import React from 'react';
import {styled} from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import {Login, PersonRounded} from '@mui/icons-material';
import {IconButton} from '@mui/material';
const NavbarDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  color: ${({theme}) => theme.text_primary};
  background: ${({theme}) => theme.bgLight};
  gap: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  max-width: 70px;
  text-decoration: none;
  align-items: center;
  color: ${({theme}) => theme.primary};
  border: 1px solid ${({theme}) => theme.primary};
  padding: 8px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.primary};
    transition: all 0.3s ease-in-out;
  }
`;
const IcoButton = styled(IconButton)`
  color: ${({theme}) => theme.text_secondary} !important;

  &:hover {
    color: ${({theme}) => theme.primary};
    transition: all 0.3s ease-in-out;
  }
`;

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <NavbarDiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon />
      </IcoButton>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavbarDiv>
  );
};

export default Navbar;
