import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ADD_USER, GET_USERS_QUERY } from '../Queries/queries'
import getAge from '../../GeneralFunctions/getAge';




function AddUser() {

  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wallet, setWallet] = useState();

  const { error, data, loading } = useQuery(GET_USERS_QUERY)
  const [createUser, 
    { error: createUserErr, data: createUserdata, loading: createUserLoading}] = useMutation(ADD_USER, {
      refetchQueries: [{query: GET_USERS_QUERY}]
    })

  console.log({ error, loading, data })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return(
    <>

      <form id="add-user" onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting...", username, name, dateOfBirth)

          createUser({ 
            variables: { 
              name: name, 
              username: username, 
              dateOfBirth: dateOfBirth, 
              age: parseInt(getAge(dateOfBirth)),
              email: email, 
              password: password,
              wallet: parseFloat(wallet),
            }})
      }}>
  
        <div className='field'>
          <label>Username: </label>
          <input type="text" value={username} onChange={ (e) => {setUsername(e.target.value) }}/>
        </div>


      <div className='field'>
        <label>name: </label>
        <input type="text" value={name} onChange={ (e) => {setName(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Date of Birth (yyyy-mm-dd): </label>
        <input type="text" value={dateOfBirth} onChange={ (e) => {setDateOfBirth(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Email: </label>
        <input type="text" value={email} onChange={ (e) => {setEmail(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Password: </label>
        <input type="text" value={password} onChange={ (e) => {setPassword(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Wallet: </label>
        <input type="number" step='0.01' min='0' value={wallet} onChange={ (e) => {setWallet(e.target.value) }}/>
      </div>

      <button>+</button>

     </form>

    </>
  );

}

export default AddUser