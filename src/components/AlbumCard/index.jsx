import React from "react";
import { Row, Col, Container, Card } from 'react-bootstrap'
import './style.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AlbumCard = () => {

  
  return (
    <Container className="container-xl " >
      <Row  className="card-container g-4">
        <Col xl={4} lg={6} >

            <Card >
                <img src="https://davids-music.co.uk/cdn/shop/products/Daughter-Stereo-Mind-Game-Digital-1_2953x.jpg?v=1673276724" alt="" />

            <div className="card-body">
              <h2>Stereo Mind Games</h2>
              <p>2023</p>
              {/* <FontAwesomeIcon iconName="fa-regular fa-heart" /> */}
            </div>

          </Card>

          
        </Col>

        <Col xl={4} lg={6}>
          <Card >
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Ifyouleavedaughter.jpg" alt="" />
            <div className="card-body">
              <h2>If You Leave</h2>
              <p>2013</p>
            </div>

          </Card>
        </Col>
    
        <Col xl={4} lg={6}>
          <Card >
            <img src="https://cf-cdn.beggars.com/fourad/site/images/releases/packshots/5988465515708.jpg" alt="" />
            <div className="card-body">
              <h2>Music from Before the Storm</h2>
              <p>2017</p>
            </div>

          </Card>
        </Col>
      {/* </Row>

      <Row className="card-container g-4"> */}
        <Col xl={4} lg={6}>
          <Card>
            <img src="https://media.pitchfork.com/photos/5929b32a9d034d5c69bf4c9a/1:1/w_600/13a102d2.jpeg" alt="" />
            <div className="card-body">
              <h2>How Not to Disappear</h2>
              <p>2016</p>
            </div>

          </Card>
        </Col>

        <Col xl={4} lg={6}>
          <Card>
            <img src="https://s3.eu-west-1.amazonaws.com/cf-cdn.beggars.com/ohdaughter/wp-content/uploads/2015/09/11154416/71KeuXDm9-L._SL1500_.jpg" alt="" />
            <div className="card-body">
              <h2>The Wild Youth</h2>
              <p>2011</p>
            </div>

          </Card>
        </Col>

      </Row>
    </Container>
    
  )
}

export default AlbumCard
