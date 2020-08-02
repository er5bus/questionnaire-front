import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from "react-redux";
class GeneralQuestions extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        const { t } = this.props
        console.log(t);

        return (
            <>
                <div>
                    <p>{t('welcome to fourth page')}</p>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, {})(withTranslation()(GeneralQuestions))