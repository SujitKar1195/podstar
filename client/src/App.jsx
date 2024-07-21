import React, {useState} from 'react';
import {styled, ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './utils/Themes';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import DisplayPodcast from './pages/DisplayPodcast';
import Favourites from './pages/Favourites';
import PodcastDetails from './pages/PodcastDetails';
import Profile from './pages/Profile';

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
            <Routes>
              <Route
                path='/'
                exact
                element={<Dashboard />}
              />
              <Route
                path='/search'
                exact
                element={<Search />}
              />
              <Route
                path='/showpodcasts/:type'
                exact
                element={<DisplayPodcast />}
              />
              <Route
                path='/favourites'
                exact
                element={<Favourites />}
              />
              <Route
                path='/podcast/:id'
                exact
                element={<PodcastDetails />}
              />
              <Route
                path='/profile'
                exact
                element={<Profile />}
              />
            </Routes>
          </Frame>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
