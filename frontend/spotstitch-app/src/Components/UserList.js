import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from '../Queries/queries'
import RenderArray from './RenderArray'

function UserList() {

  const { error, data, loading } = useQuery(GET_USERS_QUERY)

  console.log({ error, loading, data })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return data.users.map(user => {
    return(
        <>
            <h3 className='main-point' key={user.id}>Username: {user.username} </h3>
            <ol className='no-bullet'>
                <li>Name: { user.name }</li>
                <li>Age: { user.age }</li>
                <li>email: { user.email }</li>
                <li>password: { user.password }</li>

                <li>badge: <RenderArray item={ user.badge }/> </li>
                <li>inventory: <RenderArray item={ user.inventory }/></li>
                <li>events: <RenderArray item={ user.eventsRegistered }/></li>
            </ol>

        </>
    );
  })

}

export default UserList