import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../Queries/queries'
import getAge from '../GeneralFunctions/getAge';




function UpdateUser() {

  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wallet, setWallet] = useState();
  const [ UpdateUser, { error, data, loading } ] = useMutation(UPDATE_USER)

  console.log({ error, loading, data })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return(
    <>

      <form id="update-user" onSubmit={(e) => {
          e.preventDefault();

          UpdateUser({ 
            variables: { 
            username: username, 
            name: name, 
            dateOfBirth: dateOfBirth, 
            age: getAge(dateOfBirth),
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

      <button>Update</button>

     </form>

    </>
  );

}

export default UpdateUser