import React, { Component } from 'react'
import AddUser from './AddUser'
import SearchUser from './SearchUser';
import UpdateUser from './UpdateUser';
import UserList from './UserList';

export class AdminViewUser extends Component {
  render() {
    return (
        <>
            <h1>Adding Users</h1>
            <AddUser/>

            <h1>Search user by username or email</h1>
            <SearchUser/>

            <h1>Update User, Username field is to search User to Update</h1>
            <UpdateUser/>

            <h1>List of Users</h1>
            <UserList/>
        </>
    )
  }
}

export default AdminViewUser