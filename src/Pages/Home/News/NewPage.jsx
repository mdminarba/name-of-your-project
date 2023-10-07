import React from 'react'

const NewPage = ({card}) => {
  return (
    <div>
      <img src={card.image_url} alt="" />
    </div>
  )
}

export default NewPage