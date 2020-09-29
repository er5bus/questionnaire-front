import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



const QuestionHead = ({ title, pageTitle }) => {
    const { t } = useTranslation()
    return (
        <>
            <div style={{
                textAlign: "center"
            }}>
                <p className="text-primary" style={{
                    fontSize: pageTitle ? 25 : 19,
                    fontWeight: "bold"
                }}> {t(title)} </p>
            </div>
        </>
    )
}


export default QuestionHead