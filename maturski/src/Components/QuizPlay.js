import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 700,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

class QuizPlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Quiz: {
                ...this.props.quiz
            }
        }
    }

    renderQuestion() {
        const { classes } = this.props;

        return (
            null
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={8}>
                    {this.renderQuestion()}
                </Paper>
            </div>
        );
    }
}

QuizPlay.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QuizPlay);