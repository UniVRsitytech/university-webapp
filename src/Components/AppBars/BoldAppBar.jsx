import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/nav/navbar2.css'

function SimpleAppBar(props) {
    return (
        <div>
            <nav class="nav">
                <ul>
                    <a href="#">Start</a>
                    <a href="#">O nas</a>
                    <a href="#">Aktualności</a>
                    <a href="#">Kontakt</a>
                </ul>
            </nav>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (SimpleAppBar);