
import './_homescreen.scss'
import { Col,Container,Row } from 'react-bootstrap'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import Video from '../../Components/Video/Video'

const Homescreen = () => {
  return (
    <Container>
      <CategoryBar />
      <Row>
        {
          [...new Array(20)].map(() => (<Col lg={3} md={4}>
            <Video />
          </Col>
          ))
        }
      </Row>
    </Container>
   
  )
}

export default Homescreen;