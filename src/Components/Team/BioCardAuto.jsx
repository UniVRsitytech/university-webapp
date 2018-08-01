import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//css stylesheet
import "../../assets/css/team.css";

class BioCard extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
      }

    render() {
        return (
            <div>
                <Card raised={true} class="card">
                    <CardMedia
                        className="media"
                        image="../../assets/media/None_5YPOMST.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.personinfo.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.personinfo.bio}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Modal
                        </Button>
                        <Button size="small" color="primary">
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

export default BioCard;