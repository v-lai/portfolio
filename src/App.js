import React from 'react';
import { tealA700 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopAppBar from './TopAppBar';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    height: 70,
    color: tealA700,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <TopAppBar />
  </MuiThemeProvider>
);

export default App;
