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
            <li>Date of Birth: { user.dateOfBirth }</li>
            <li>Email: { user.email }</li>
            <li>Password: { user.password }</li>
            <li>Wallet: { user.wallet }</li>

            <li>Badge: <RenderArray item={ user.badge }/> </li>
            <li>Inventory: <RenderArray item={ user.inventory }/></li>
            <li>Events: <RenderArray item={ user.eventsRegistered }/></li>
        </ol>

    </>
  )
}

export default DisplayUser