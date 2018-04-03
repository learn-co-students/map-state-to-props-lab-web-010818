import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const users = this.props.users.map(user => {
      return <div>{user.userName}</div>
    })
    return (
      <div>

        <div>
          {users}
        </div>
      </div>
    )
  }
}

 // aren't we supposed to be connecting something around here?

const mapStateToProps = (state) => {
  return {
    primaryUser: state.users[0],
    users: state.users
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
