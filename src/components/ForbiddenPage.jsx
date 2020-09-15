import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Col, Row } from 'reactstrap'

import anonymousRoutes from './../routes/anonymous'

import forbiddenImg from './../assets/img/401.svg'

const ForbiddenPage = () => {

  return (
    <Container className="pt-4 pb-4">
      <Row>
        <Col className="text-center d-flex align-items-center justify-content-center">
          <div>
            <Link to={ anonymousRoutes.path }>
              <img className="img-fluid w-75" src={ forbiddenImg } alt="401 not allowed" />
            </Link>
            <h1 className="mt-5"> Accès <span className="font-weight-bolder text-primary"> Access Interdit </span></h1>
            <p className="lead my-4">Oups! Il semble que vous n'ayez pas l'autorisation d'accéder à cette page. Si vous pensez que cela nous pose problème, veuillez nous en informer.</p>
            <Link className="btn btn-primary animate-hover" to={ anonymousRoutes.path }>
              <i className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i> Accueil
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default ForbiddenPage
