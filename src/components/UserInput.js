import React, { Component } from 'react';
import { addUser } from '../actions/users';

class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      homeTown: ''
    };
  }

  handleOnUserNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleOnHometownChange(event) {
    this.setState({
      homeTown: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch(addUser(this.state))
    this.setState({userName: '', homeTown: ''})
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleOnUserNameChange(event)}
          value={this.state.userName}
          placeholder="user name"/>
      </p>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleOnHometownChange(event)}
          value={this.state.homeTown}
          placeholder="homeTown"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export default UserInput;
