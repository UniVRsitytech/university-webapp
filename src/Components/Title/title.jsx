import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/App.css';
import '../../assets/css/layout.css';

// const background = require('./assets/images/bluesquares.jpg');

var divstyle= {
    margin: '0px',
    height: '5em'
}

function Title(props) {
    return (
        <div class="avenuefont center">
            <h1 style={divstyle}>Define your own reality.</h1>
        </div>
    );
}

export default Title;