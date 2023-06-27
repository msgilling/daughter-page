import React from 'react'
import './style.css'
import daughterBand from '../../assets/daughter-new-album.jpg'


const AboutPage = () => {


  return (
    <>
      <div className="about-text">
        <h1>Daughter</h1>
        <p><strong>Genre:</strong> Indie Folk</p>
        <p>Daughter is an English indie folk trio. Fronted by North London native Elena Tonra, the band was formed in 2010 after the addition of Swiss guitarist Igor Haefeli and drummer Remi Aguilella from France. They have released four EPs and three albums, and are currently signed to Glassnote and 4AD.</p>
        <img src={daughterBand} id="img-band" alt="Image of the band members in Daughter"  height="500px"/>
      </div>
    </>
  )
}

export default AboutPage
