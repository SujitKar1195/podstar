import React, {useState} from 'react';
import {styled, ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './utils/Themes';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';

const Container = styled.div`
  display: flex;
  background: ${({theme}) => theme.bgLight};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <Navbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            PODSTAR
          </Frame>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
