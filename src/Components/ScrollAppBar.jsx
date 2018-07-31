import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar(props) {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            UniVRsity
            {/* <img src={ require('../assets/images/univrsity.png') } />  */}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleAppBar);