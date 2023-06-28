import React, { useState } from 'react'
import Heart from 'react-animated-heart'
import './style.css'

const LikeButtonTwo = ({style}) => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="heartTwo"> 
      {/* <span>{ `Like | ${likes}`}</span> */}
      <Heart style={style }isClick={isClicked} onClick={() => setIsClicked(!isClicked)}/>
    </div>
  )
}

export default LikeButtonTwo
