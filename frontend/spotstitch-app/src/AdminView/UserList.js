import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from '../Queries/queries'
import DisplayUser from './DisplayUser'

function UserList() {

  const { error, data, loading } = useQuery(GET_USERS_QUERY)

  console.log({ error, loading, data })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return data.users.map(user => {
    return(
      <DisplayUser user={user} key={user.id} />

    );
  })

}

export default UserList