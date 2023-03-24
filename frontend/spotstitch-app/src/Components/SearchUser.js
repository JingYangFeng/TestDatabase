import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_USER } from '../Queries/queries'
import RenderArray from './RenderArray'

function SearchUser() {

  const [searchUser, { error, data, loading, }] = useLazyQuery(GET_USER)

  const [usernameInput, setUsername] = useState("");
  const [emailInput, setEmail] = useState("");

  console.log("===================================")
  console.log(data)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <div className='field'>
        <label>username: </label>
        <input type="text" value={usernameInput} onChange={ (e) => {setUsername(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>email: </label>
        <input type="text" value={emailInput} onChange={ (e) => {setEmail(e.target.value) }}/>
      </div>


      <button
        onClick={() => searchUser( { variables: { username: usernameInput, email: emailInput } } )}
      >
        Search
      </button>

    </>
  );


}

export default SearchUser