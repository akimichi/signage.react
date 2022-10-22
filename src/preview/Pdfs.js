import React, {useEffect, useState} from "react"
import { Amplify, API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { useInterval } from '../hooks/useInterval'
import FadeIn from '../components/FadeIn'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { fetchPdfs } from '../utils'


const PreviewPdfs = () => {
  const [index, setIndex] = useState(0)
  const [pdfs, setPdfs] = useState([])
  const [numPages, setNumPages] = useState(1);
  const [visible, setVisible] = useState(true)
  const dutation = 30*1000

  useEffect(() => {
    const gotPdfs = fetchPdfs()
    console.log("gotPdfs", gotPdfs)
    gotPdfs.then(items => {
      console.log("items", items)
      setPdfs(items)
    })
  }, [])

  useInterval(() => {
    // Your custom logic here
    if(index >= pdfs.length -1) {
      setIndex(0)
    } else {
      setIndex((index) =>  index + 1);
    }
    setVisible(true)
  }, dutation); 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        { console.log("pdfs", pdfs)}
        <Document file={pdfs[index]} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
    </div>
  )
}


export default PreviewPdfs


