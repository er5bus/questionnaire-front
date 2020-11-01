import React from 'react';
//import { Link } from 'react-router-dom'
// reactstrap components
import { Button } from 'reactstrap';


const FirstQuestion = ({ onExit, onContinue }) => {

  return (
    <>
      <div>
        <h1 className="h2"> Avez-vous des douleurs corporelles?</h1>

        <div className="pb-5" />
        <Button onClick={onContinue}>Oui</Button>
        <Button onClick={onExit}>Non</Button>
      </div>
    </>
  )
}


export default FirstQuestion
