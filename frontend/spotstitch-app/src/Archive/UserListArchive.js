import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getUsersQuery } from '../Queries/queries'


class UserList extends Component {

    displayUsers(){

        var data = this.props.data
        
        console.log(data.error)
        
        if (data.loading) {
            return ( <div>Loading Users...</div> )
        } else {
            return data.users.map(user => {
                return(
                    <>
                        <h3 className='main-point' key={user.id}>Username: {user.username} </h3>
                        <ol className='no-bullet'>
                            <li>Name: {user.name}</li>
                            <li>Age: {user.age}</li>
                        </ol>

                    </>
                );
            })
        }
    }

  render() {
    return (
      <div>
        <ul id="user-list">
            { this.displayUsers() }
        </ul>
      </div>
    )
  }
}

export default UserList