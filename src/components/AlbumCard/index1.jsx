import React from "react";
import { Row, Col, Container, Card } from 'react-bootstrap'
import './style.css'

const AlbumCard = () => {
  return (
    <>
      <Container>
        <Row className="card-container g4" style={{ border: "2px solid red"}}>
          <Col className="card d-flex" style={{ border: "2px solid black"}}>
            <Card>
              <Card.Img src="https://davids-music.co.uk/cdn/shop/products/Daughter-Stereo-Mind-Game-Digital-1_2953x.jpg?v=1673276724">
                
              </Card.Img>
              <Card.Title>Stereo Mind Games</Card.Title>
              <Card.Text>2023</Card.Text>
            </Card>
          </Col>

          <Col className="card d-flex" style={{ border: "2px solid black"}}>
            <img src="https://davids-music.co.uk/cdn/shop/products/Daughter-Stereo-Mind-Game-Digital-1_2953x.jpg?v=1673276724" alt="" />
            <div className="card-body">
            <h2>Stereo Mind Games</h2>
            <p>2023</p>
          </div>
          </Col>
        </Row>
      </Container>
    </>
    
  )
}

export default AlbumCard
