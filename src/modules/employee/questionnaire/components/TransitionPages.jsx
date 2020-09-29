import React from 'react';
import CochingLogo from '../../../../assets/img/CochingLogo.svg';
import ErgoLogo from '../../../../assets/img/ErgoLogo.svg';
import HealthLogo from '../../../../assets/img/HealthLogo.svg';
import NutriLogo from '../../../../assets/img/NutriLogo.svg';
import PsyLogo from '../../../../assets/img/PsyLogo.svg';
const Transitionpages = ({ title, page }) => {

    const returnLogo = (page) => {
        let logo = ""
        switch (page) {
            case 1:
            case 2:
            case 3:
                logo = HealthLogo
                break;

            case 4:
                logo = ErgoLogo
                break;
            case 5:
                logo = PsyLogo
                break;
            case 6:
                logo = CochingLogo
                break;
            case 7:
                logo = NutriLogo
                break;
            default:
                break;
        }
        return logo
    }
    return (
        <>
            <div className="d-flex" style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div>
                    <img src={returnLogo(page)} alt="..." />
                </div>
                <div className="transition-text">
                    {title}
                </div>

            </div>
        </>
    )
}
export default Transitionpages
