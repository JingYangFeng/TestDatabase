import React, { Component } from 'react'
import { gql } from "apollo-boost"
import { graphql } from 'react-apollo'

const getUsersQuery = gql`
    {
        users {
            id
            username
            name
            age
            badge
            inventory
        }
    }
`

class UserList extends Component {

    displayUsers(){
        console.log(this.props)
        var data = this.props.data
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

export default graphql(getUsersQuery)(UserList)