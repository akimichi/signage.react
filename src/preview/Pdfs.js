import React, {useEffect, useState} from "react"
// import { Amplify, API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { useInterval } from '../hooks/useInterval'
import { fadeIn } from '../components/FadeIn'
import styled, { keyframes } from 'styled-components';
// import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from '../components/ErrorFallback'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { fetchPdfs } from '../utils'

const StyledDocument = styled(Document)`
   display: inline-block;
   height: 1920px;
   width: 1080px;
   margin-right: calc(50% - 50vw);
   margin-left: calc(50% - 50vw);
   animation: ${fadeIn} 5s ease-in-out;
`;

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
        <StyledDocument file={pdfs[index]} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </StyledDocument>
    </div>
  )
}


export default PreviewPdfs


