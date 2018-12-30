import React, { Component } from 'react'
import AppBar from './AppBar';
import _ from 'lodash';

import DefaultData from '../Data/Default';

import Start from '../Pages/Start';
import QuizPlay from './QuizPlay';

export default class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "start",
      toEdit: {},
      toPlay: {},
    }

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(ID) {
    console.log(ID)
    this.setState({
      currentPage: "QuizPlay",
      toPlay: _.find(DefaultData, { ID: ID })
    })
  }

  renderPage() {
    switch (this.state.currentPage) {
      case "start": {
        return <Start
          DefaultData={DefaultData}
          handlePlay={this.handlePlay}
        />;
      };
      case "QuizPlay": {
        return <QuizPlay quiz={this.state.toPlay} />;
      };
      default: return <Start />
    }
  }

  render() {
    return (
      <div>
        <AppBar />
        {this.renderPage()}
      </div>
    )
  }
}