import React from 'react'
import './_homescreen.scss'
import { Col,Row, Container } from 'react-bootstrap'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import Video from '../../Components/Video/Video'

const Homescreen = () => {
  return (
    <Container>

        <CategoryBar />
        <Row>
            {
                [...new Array(20)].map((index) => (
                <Col lg={3} md={4} key={index}> <Video /> </Col>))
            }
        </Row>
    </Container>
  )
}

export default Homescreen