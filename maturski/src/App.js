import React, { Component } from 'react';
import './App.css';
import Shell from './Components/Shell';
import Button from '@material-ui/core/Button';

import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Shell/>
      </MuiThemeProvider>
    );
  }
}

export default App;