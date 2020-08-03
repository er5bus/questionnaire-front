import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



const NutritionalPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div style={{
                textAlign: "center"
            }}>
                <p className="text-primary" style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}> {t("Nutritionnelle page ")} </p>
            </div>
        </>
    )
}


export default NutritionalPage