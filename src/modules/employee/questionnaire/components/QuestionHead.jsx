import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



const QuestionHead = ({ title, pageTitle }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="sections-head"  >
                <p  > {t(title)} </p>
            </div>
        </>
    )
}


export default QuestionHead