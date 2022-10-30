import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';

function Header() {
  return (
    <header className="header">
      <AppBar position="static" color="info">
        <Toolbar>
          <HowToVoteOutlinedIcon />
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            Eleições 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
