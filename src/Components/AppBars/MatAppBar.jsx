import "../../assets/css/nav/appbar.css"

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const logo = require('../../assets/images/univrsity.png');

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    pushright: {
        marginLeft: 500
    }
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" class="skygradient">
                <Toolbar style={{height:100}}>
                    <img src={logo} alt="UniVRsity Logo" style={{height:70}}/>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={props.handleSetActive}>
                        <button class="large tabbutton1" >About</button>
                    </Link>
                    <Link activeClass="active" to="solutions" spy={true} smooth={true} duration={500} onSetActive={props.handleSetActive}>
                        <button class="large tabbutton" >Solutions</button>
                    </Link>
                    <Link activeClass="active" to="partners" spy={true} smooth={true} duration={500} onSetActive={props.handleSetActive}>
                        <button class="large tabbutton" >Partners</button>
                    </Link>
                    <Link activeClass="active" to="team" spy={true} smooth={true} duration={500} onSetActive={props.handleSetActive}>
                        <button class="large tabbutton" >Meet The Team</button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);