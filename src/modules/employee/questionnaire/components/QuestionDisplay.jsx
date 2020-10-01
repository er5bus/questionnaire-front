import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import emptyIcon from './../../../../assets/img/empty.png';
import QuestionDisplayLoader from './QuestionDisplayLoader';




const QuestionDisplay = ({ item, isLoading, onSelectChoice = f => f }) => {

  const { t } = useTranslation()


  return (
    <>
      {isLoading ? <QuestionDisplayLoader />
        : (item && item.type === "ContentNode")
          ? <>
            <h1 className="pb-2">{item.node_name}</h1>
            { /*<p className="pb-2" dangerouslySetInnerHTML={{ __html: item.content_area }} />*/}
            <div className="question-answer">
              <div className="pb-4 question">{item.question && item.question}</div>
              {item.actions.map((action, i) =>
                (item.display_style === "BUTTON"
                  ? <div className="ansewer" key={action.id}>
                    <Button
                      className=" mt-4 mr-2 answer-item"
                      onClick={() => onSelectChoice(item.question, action)}
                    >
                      {action.name}
                    </Button>
                  </div>
                  : <div
                    key={action.id}
                    className="ansewer mt-4 mr-2"
                    onClick={() => onSelectChoice(item.question, action)}
                  >
                    <div className="answer-item">
                      {action.name}
                    </div>

                  </div>
                ))}
            </div>
          </>
          : <div className="text-center">
            <img src={emptyIcon} alt="..." />
            <h6 className="pt-4 text-primary text-uppercase">
              {t("Veuillez réssayer, aucune question trouvée")}
            </h6>
          </div>
      }
    </>
  )
}


export default QuestionDisplay
