import React from 'react'
import RenderArray from '../Components/RenderArray'

function DisplayUser({user}) {
    if (!user) return

  return (
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
  )
}

export default DisplayUser