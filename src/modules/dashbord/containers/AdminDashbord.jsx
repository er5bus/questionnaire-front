import React from "react"
import { connect } from "react-redux"
//import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next"

// reactstrap components
import { Container } from "reactstrap"


class Dashbord extends React.Component {

  render() {
    return (
      <>
        <div>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <h1 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> Under development</h1>
            </Container>
          </div>
        </div>
      </>
    )
  }
}


const mapStateToProps = state => state.dashbord

export default connect(mapStateToProps)(withTranslation()(Dashbord))
