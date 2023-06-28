import React, { useState } from 'react'
import Heart from 'react-animated-heart'
import './style.css'

const LikeButton = ({style}) => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="heart"> 
      {/* <span>{ `Like | ${likes}`}</span> */}
      <Heart style={style }isClick={isClicked} onClick={() => setIsClicked(!isClicked)}/>
    </div>
  )
}

export default LikeButton
