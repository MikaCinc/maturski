import React, { Component } from 'react'
import AppBar from './AppBar';

import Start from '../Pages/Start';

export default class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "start"
    } 
  }

  renderPage() {
    switch(this.state.currentPage) {
      case "start": {
        return <Start/>;
      }
      default: return <Start/>
    }
  }

  render() {
    return (
      <div>
        <AppBar/>
        {this.renderPage()}
      </div>
    )
  }
}