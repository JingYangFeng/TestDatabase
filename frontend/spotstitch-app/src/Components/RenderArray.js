import React from 'react'

function RenderArray({ item }) {
    
    // If there is no array
    if (item == null) return    

    return (

        item.map(item => {
            return (<p1>{item} | </p1>)
        })
    )
}

export default RenderArray