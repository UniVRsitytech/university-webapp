import "../../assets/css/layout.css"

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'

import classNames from 'classnames';

//css stylesheet
import "../../assets/css/team.css";
const image1 = require('../../assets/headshots/None_5YP0MST.jpg');

const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 300,
        height: 300,
    },
    wide: {
        flex: 1
    },
    card: {
        // minHeight: 500,
        // maxHeight: 700
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 120,
        height: theme.spacing.unit * 80,
        backgroundColor: theme.palette.background.paper,
        // backgroundColor: '#6DD5FA',
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    }
});

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class BioCardAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className="media"
                        image={require('../../assets/headshots/' + this.props.personinfo.picture)}
                        title="Contemplative Reptile"
                    />
                    {/* <Avatar alt="Avatar" src={require('../../assets/headshots/' + this.props.personinfo.picture)} className={classNames(classes.avatar, classes.bigAvatar)} /> */}
                    <CardContent>
                        <h2>{this.props.personinfo.name}</h2>
                        {this.props.personinfo.bio}
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.wide} onClick={this.handleOpen}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                                <Grid container spacing={24}>
                                    <Grid item xs={6}>
                                        <Image
                                            src={require('../../assets/headshots/' + this.props.personinfo.picture)}
                                            aspectRatio={1/1}
                                            imageStyle={ {height: "flex" } }
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div class="style1">
                                        <h2 class="avenuefontplain"><u>About Me</u></h2>
                                        {/* <br /> */}
                                        {this.props.personinfo.modalbio}
                                    </div>
                                    </Grid>
                                </Grid>
                    </div>
                </Modal>
            </div>
        );
    }
}

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(BioCardAuto);