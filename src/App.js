import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import GoUpBtn from './components/GoUpBtn';

const theme = createTheme({
  palette: {
    info: {
      main: '#2c387e',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ],
  },
});

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <div className="body">
        <Header />
        <Body />
        <Footer />
        <GoUpBtn />
      </div>
    </ThemeProvider>
  );
}

export default App;
