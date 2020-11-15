import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// reactstrap components
import { Button } from 'reactstrap';


const FirstQuestion = ({ onExit, onContinue }) => {

  return (
    <>
      <div>
        <h1 className="h2"> Votre corps vous fait-il souffrir?</h1>

        <div className="pt-5" style = {{
          display:"flex"
        }} >
          <Button onClick={onContinue} className="next-button">Oui</Button>
          <Button onClick={onExit} className="nope-button">Non</Button>
        </div>
      </div>
    </>
  )
}


export default FirstQuestion
