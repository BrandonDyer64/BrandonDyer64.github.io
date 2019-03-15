import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterImage from '../img/footer.png'
import license from '../strings/MIT'

export default () => {
  return (
    <footer style={{ backgroundImage: 'url(' + FooterImage + ')' }}>
      <Container>
        <p>© 2019 Brandon Dyer</p>
        <Row>
          <Col md={8}>
            <p style={{ fontSize: '8pt' }}>{license}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
