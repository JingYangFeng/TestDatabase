import React from 'react'
import { useQuery } from '@apollo/client'
import { getUsersQuery } from '../Queries/queries'

function UserList() {

  const { error, data, loading} = useQuery(getUsersQuery)

  console.log({ error, loading, data })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

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

export default UserList