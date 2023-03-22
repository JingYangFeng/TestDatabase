import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getUsersQuery } from '../Queries/queries'



class AddUser extends Component {

  displayAuthors() {
    var data = this.props.data
    if (data.loading) {
      return( <option disabled>Loading Users...</option> )
    } else {
      return data.users.map(user => {
        return( <option key={user.id} value={user.id}>{user.username}</option> )
      })
    }
  }
    
  render() {

    return (
      <form id="add-user">
        
        <div className='field'>
          <label>Username:</label>
          <input type="text"/>
        </div>


        <div className='field'>
          <label>name:</label>
          <input type="text"/>
        </div>

        <div className='field'>
          <label>Age:</label>
          <input type="text"/>
        </div>

        {/* button
        
        <div className='field'>
          <label>Age:</label>
          <select>
            <option>Select Age</option>
          </select>
        </div>

        <button>+</button> */}

        {/* badge and inventory defaults here */}


      </form>
    )
  }
}

export default AddUser