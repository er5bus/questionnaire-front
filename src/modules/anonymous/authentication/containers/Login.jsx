import React from "react";
//import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
// reactstrap components
import { Card, CardBody, Col } from "reactstrap";
//import anonymousRoutes from './../../../routes/anonymous'
import { clearError, login } from "./../actions";
import LoginForm from "./../components/LoginForm";




class Login extends React.Component {

  componentDidMount() {
    this.props.clearError()
  }

  onSubmit = (values) => {
    this.props.login(values)
  }

  render() {
    const { t, error, isLoading } = this.props
    return (
      <>
        <Col lg="6" md="8">
          <Card className="shadow card-shadow-style" style={{
            marginTop: 100,

          }}>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-md-center mb-4 mt-md-0 login-title">
                <h1 className="mb-3"> {t('Sign In')}</h1>
                <p >Remplissez le formulaire <br /> pour accéder à votre compte</p>
              </div>
              <LoginForm onSubmit={this.onSubmit} errors={error} isLoading={isLoading} />
              { /*<div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span className="font-weight-normal"> { t('Not registered?') }
                  <Link to={ anonymousRoutes.path + anonymousRoutes.routes.register.path } className="font-weight-bold">{ " " } { t('Create account') }</Link>
                </span>
              </div>*/ }
            </CardBody>
          </Card>
        </Col>
      </>
    )
  }
}


const mapStateToProps = state => state.auth

export default connect(mapStateToProps, { login, clearError })(withTranslation()(Login))
