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
              <h1 className="mt-5"> Page non <span className="font-weight-bolder text-primary">trouvée</span></h1>
              <p className="lead my-4">Oups! Il semble que vous ayez suivi un mauvais lien. Si vous pensez qu'il s'agit d'un problème avec nous, veuillez nous en informer.</p>
              <Link className="btn btn-primary animate-hover" to={ anonymousRoutes.path }>
                <i className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i> Accueil
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default PageNotFound
