import React, { Component } from 'react';

export default class Refreshed extends Component {
  state = {
    visible: true
  };
  show = () => {
    this.setState({
      visible: true
    });
    this.timeout = setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 1000 * 1);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render() {
    return this.state.visible ? <div className="message">Refreshed</div> : null;
  }
}
