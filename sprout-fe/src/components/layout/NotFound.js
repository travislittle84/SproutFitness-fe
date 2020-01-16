import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const NotFound = () => {
  return (
      <Jumbotron fluid className="jumbotron">
        <Container fluid className="jumbotron-container">
          <h1 className="display-1">Page Not Found</h1>
          <h4 className="display-4">Sorry, this page does not exist</h4>
        </Container>
      </Jumbotron>
  )
}

export default NotFound

