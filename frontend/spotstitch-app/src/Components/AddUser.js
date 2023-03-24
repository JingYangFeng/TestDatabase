import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ADD_USER, GET_USERS_QUERY } from '../Queries/queries'

function AddUser() {

  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
          console.log("submitting...", username, name, age)

          createUser({ 
            variables: { 
              name: name, 
              username: username, 
              age: parseInt(age), 
              email: email, 
              password: password }})
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
        <label>Age: </label>
        <input type="number" value={age} onChange={ (e) => {setAge(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Email: </label>
        <input type="text" value={email} onChange={ (e) => {setEmail(e.target.value) }}/>
      </div>

      <div className='field'>
        <label>Password: </label>
        <input type="text" value={password} onChange={ (e) => {setPassword(e.target.value) }}/>
      </div>

      <button>+</button>

     </form>

    </>
  );

}

export default AddUser