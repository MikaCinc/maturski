import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '300px',
    margin: '10px',
  },
  avatar: {
    width: 25,
    height: 25,
    marginRight: 4,
    textAlign: 'center',
    display: 'inline-block',
    lineHeight: '25px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: props.quiz.Color }}
          >
            {
              props.quiz.Name[0]
            }
          </Avatar>
          <Typography component="h5" variant="h5" style={{ display: 'inline-block' }}>
            {props.quiz.Name.slice(1)}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.quiz.ShortDescription}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Play" onClick={() => {props.onPlay(props.quiz.ID)}}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);