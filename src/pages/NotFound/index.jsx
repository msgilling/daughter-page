import React from 'react'
import vinyl from '../../assets/pngwing.com.png'

const NotFound = () => {
  return (
    <>
      <div>
        <div>
          <h1>Page Not Found</h1>
          <p>We couldn't find the page your were looking for.</p>
          <p>Go back</p>

        </div>
        <div>
          <img src={vinyl} alt="vinyl player illustration" />
        </div>
      </div>
    
    </>
  )
}

export default NotFound
