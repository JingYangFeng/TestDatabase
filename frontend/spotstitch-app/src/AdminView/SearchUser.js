import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_USER } from '../Queries/queries'
import DisplayUser from './DisplayUser';


function SearchUser() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  // const [searchUser, { error, data, loading }] = useQuery(GET_USER, {
  const [ getUser, { error, data, loading }] = useLazyQuery(GET_USER, {
    onCompleted: (queryData) => {
      console.log(queryData)
      console.log("_____________________________")
      

    },
    onError: (errorData) => {
      // console.log(errorData)
    }
  },
  {
    refetchQueries: [{query: GET_USER}]
  }
  );
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  if (data) console.log(data.user)


  return (
    <>
    
      <div className='field'>
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='field'>
        <label>Email: </label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button 
        onClick={() => getUser({ variables: {username: username, email: email} })}
      >
        Search User
      </button>


      <div>
        {(data) ? <DisplayUser user={data.user} /> : '' }
      </div>
      
      
    </>
  );


}

export default SearchUser