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
import classNames from 'classnames';

//css stylesheet
import "../../assets/css/team.css";
const image1 = require('../../assets/headshots/None_5YP0MST.jpg');

const styles = {
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
        minHeight: 300,
        maxHeight: 500
    }
  };

class BioCardAuto extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
      }

    render() {
        const { classes } = this.props;
        return (
            <div class="card">
                <Card className={classes.card}>
                    <CardMedia
                        className="media"
                        image={require('../../assets/headshots/' + this.props.personinfo.picture)}
                        title="Contemplative Reptile"
                    />
                    {/* <Avatar alt="Avatar" src={require('../../assets/headshots/' + this.props.personinfo.picture)} className={classNames(classes.avatar, classes.bigAvatar)} /> */}
                    <CardContent>
                        {/* <Typography gutterBottom variant="headline" component="h2"> */}
                            <h2>{this.props.personinfo.name}</h2>
                        {/* </Typography> */}
                        {/* <br /> */}
                        {/* <Typography component="p"> */}
                            {this.props.personinfo.bio}
                        {/* </Typography> */}
                    </CardContent>
                    {/* <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            hello
                        </Typography>
                    </CardContent> */}
                    <CardActions>
                        <Button size="small" className={classes.wide}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(BioCardAuto);