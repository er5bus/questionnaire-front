import React from 'react'
import { isEmpty } from 'lodash'
import { CSVReader } from 'react-papaparse'
import {Button} from 'reactstrap'


const CSVReaderBase = ({ onFileLoad, onError=f=>f, onRemoveFile }) => {

  const buttonRef = React.createRef()
  const [files, setFiles] = React.useState([])
  const [data, setData] = React.useState([])

  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  const handleOnFileLoad = (data = [], file) => {
    setFiles(files.concat([file]))
    if (data){
      setData(data.filter(row=> !isEmpty(row)))
      onFileLoad(data.filter(row=> !isEmpty(row)))
    }
  }

  const handleOnRemoveFile = () => {
    onRemoveFile(data)
    setFiles([])
    setData([])
  }

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }

  return (
    <>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={onError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {() => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10,
              width: '100%'
            }}
          >
            <Button
              type='button'
              color='primary'
              onClick={handleOpenDialog}
              style={{
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <i className="fas fa-upload" /> {" "} Télécharger un fichier csv
            </Button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 10,
                marginBottom: 10,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%'
              }}
            >
              {files && files.map(file => file.name + ", ")}
            </div>
          </aside>
        )}
      </CSVReader>
    </>
  )
}



export default CSVReaderBase
