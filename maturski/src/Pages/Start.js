import React, { Component } from 'react'
import QuizTile from '../Components/QuizTile';
import Grid from '@material-ui/core/Grid';

export default class Start extends Component {

  renderDefaultQuizes() {
    if (!this.props.DefaultData || !this.props.DefaultData.length) return null;

    return (
      <Grid container justify="center" spacing={32}>
        {
          this.props.DefaultData.map((item) => {
            return (
              <Grid key={item.ID} item>
                <QuizTile quiz={{ ...item }} />
              </Grid>
            )
          })
        }
      </Grid>
    )
  }

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        {this.renderDefaultQuizes()}
      </div>
    )
  }
}
