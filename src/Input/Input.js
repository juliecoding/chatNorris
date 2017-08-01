require('./Input.css');

import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {Input: ''};
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onSend(this.state.chatInput);
    this.setState({chatInput: ''});
  }

  render() {
    return (
      <form className='msg-input' onSubmit={this.submitHandler}>
        <input type='text'
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder='Say it loud, say it proud...'
          required />
      </form>
    );
  }
}