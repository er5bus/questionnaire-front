import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, Col } from 'reactstrap';
import Loader from './../../../../components/Loader';
import anonymousRoutes from './../../../../routes/anonymous';
import { clearError, fetchInvitation, register } from './../actions';
import RegisterEmployeeForm from './../components/RegisterEmployeeForm';
import RegisterForm from './../components/RegisterForm';


class Register extends React.Component {

  componentDidMount() {
    const { param } = this.props.match.params

    this.props.fetchInvitation(param)
    this.props.clearError()
  }

  onSubmit = (values) => {
    const { param } = this.props.match.params
    const { username, email, password, professionalEmail } = values
    this.props.register(param, { professionalEmail, username, email, password })
  }
  
  render() {
    const { param } = this.props.match.params
    const { t, invitation, error, isLoading, isLoadingInvitation } = this.props
    if (isLoadingInvitation) {
      return <Loader />
    }
    else if (error && !invitation && param !== "employee") {
      return <>
        <Col lg="8" md="8" className="pt-5">
          <Card className="shadow">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-3 h3"> {t('Sorry, Your Invitation Has Expired.')}</h1>
                <p className="text-gray">{t('You\'ll need to the admin to resubmit your request for invitation.')}.</p>
              </div>
              <div className="d-block d-sm-flex justify-content-center align-items-center mt-5">
                <span className="font-weight-normal"> {t('Already have an account?')}
                  <Link to={anonymousRoutes.path + anonymousRoutes.routes.login.path} className="font-weight-bold">
                    {" "} {t('Sign in')}
                  </Link>
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
    } else {
      return (
        <>
          <Col lg="8" md="8" className="mt-lg-5" >
            <Card className="shadow">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h1 className="mb-3 h3"> {t('Sign up to our platform')}</h1>
                  <p className="text-gray">{t('Use your credentials to create your account')}.</p>
                  <p className="text-gray">{t('Choose a pseudo to connect anonymously to the platform  ')}.</p>
                </div>
                <RegisterForm initialValues={invitation} onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                  <span className="font-weight-normal"> {t('Already have an account?')}
                    <Link to={anonymousRoutes.path + anonymousRoutes.routes.login.path} className="font-weight-bold">{" "} {t('Sign in')}</Link>
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </>
      )
    }
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps, { register, fetchInvitation, clearError })(withTranslation()(Register))
