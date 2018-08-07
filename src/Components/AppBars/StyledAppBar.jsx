import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/nav/navbar1.css';
const logo = require('../../assets/images/univrsity.png');

function StyledAppBar(props) {
  return (
    <div class="coolbackground">
        <Toolbar>
        <img src={logo} alt="UniVRsity Logo" style={{height:100}}/>
          <nav class="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        </Toolbar>        
    </div>
  );
}

StyledAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (StyledAppBar);