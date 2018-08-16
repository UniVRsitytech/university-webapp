import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/App.css';
import '../../assets/css/layout.css';

// const background = require('./assets/images/bluesquares.jpg');

var divstyle= {margin: '0px', height: '4em'}

function Title(props) {
    return (
        <div class="avenuefont center verticalcenter">
            <p style={divstyle}>Define your own reality.</p>
        </div>
    );
}

export default Title;