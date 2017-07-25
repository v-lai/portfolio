import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from './NavDrawer';

export default class TopAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    let title = "v-lai.github.io";
    return (
      <div>
        <AppBar
          className="title"
          title={title}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <NavDrawer
          open={this.state.open}
          close={this.handleClose.bind(this)} />
      </div>
    );
  }
}
