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
            <div>
              <h3 className="pb-4 text-primary">{item.question && item.question}</h3>
              {item.actions.map((action, i) =>
                (item.display_style === "BUTTON"
                  ? <div key={action.id}>
                    <Button
                      className="btn mt-4 mr-2"
                      color="primary"
                      onClick={() => onSelectChoice(item.question, action)}
                    >
                      {action.name}
                    </Button>
                  </div>
                  : <div
                    key={action.id}
                    className="panel-link mb-2"
                    onClick={() => onSelectChoice(item.question, action)}
                  >
                    {action.name}
                  </div>
                ))}
            </div>
          </>
          : <div className="text-center">
            <img src={emptyIcon} alt="..." />
            <h6 className="pt-4 text-primary text-uppercase">
              {t("Oops! no question found")}
            </h6>
          </div>
      }
    </>
  )
}


export default QuestionDisplay
