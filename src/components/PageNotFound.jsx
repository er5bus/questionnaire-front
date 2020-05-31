import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Col, Row } from 'reactstrap'

import anonymousRoutes from './../routes/anonymous'

import notFoundImg from './../assets/img/404.svg'

const PageNotFound = () => {

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col className="text-center d-flex align-items-center justify-content-center">
            <div>
              <Link to={ anonymousRoutes.path }>
                <img className="img-fluid w-75" src={ notFoundImg } alt="404 not found" />
              </Link>
              <h1 className="mt-5">Page not <span className="font-weight-bolder text-primary">found</span></h1>
              <p className="lead my-4">Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
              <Link className="btn btn-primary animate-hover" to={ anonymousRoutes.path }>
                <i className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i>Go back home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default PageNotFound
