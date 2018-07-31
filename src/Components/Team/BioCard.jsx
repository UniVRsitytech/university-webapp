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

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card class="card">
        <CardMedia
          className="media"
          image="../../assets/media/None_5YPOMST.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Team Member
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default SimpleMediaCard;