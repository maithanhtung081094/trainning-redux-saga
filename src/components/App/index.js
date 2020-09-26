import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import theme from '../../commons/Theme';
import Taskboard from '../Taskboard';
import Styles from './styles';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
      // <div>
      //     <h1>H1</h1>
      //     <Button variant="contained" color="primary">
      //         Material UI Button
      //     </Button>
      //     <div className={classes.box}>
      //         <div className={classes.shape} >ReactJs</div>
      //         <div className={classes.shape}>AgulerJs</div>
      //         <div className={classes.shape}>VusJs</div>
      //     </div>
      // </div>
    );
  }
}

export default withStyles(Styles)(App);
