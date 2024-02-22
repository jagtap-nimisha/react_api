import React from 'react'

const Postcard = (props) => {
  return (
    <div className='post_cards'>
        <h1>{props.body}</h1>
        <p>{props.title}</p>
    </div>
  )
}

export default Postcard