import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../assets/css/navbar0.css';

function SimpleAppBar(props) {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          UniVRsity
          <Grid container spacing={4} class='right1'>
            <Grid item xs={3}>
              <Button>Login</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>Login</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>Login</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleAppBar);