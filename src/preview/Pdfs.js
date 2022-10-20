import React, {useEffect, useState} from "react"
import { Amplify, API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { useInterval } from '../hooks/useInterval'
import { fetchPdfs } from '../utils'
import FadeIn from '../components/FadeIn'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'

const PreviewPdfs = ({data}) => {

  const [index, setIndex] = useState(0)
  const [pdfs, setPdfs] = useState([])
  const [visible, setVisible] = useState(true)
  const dutation = 30*1000

  useEffect(() => {
    fetchPdfs().then(pdfs => {
      setPdfs(pdfs)
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        { console.log("pdfs", pdfs)}
        <h2> {pdfs[index].filename} </h2>
        <FadeIn
          src={pdfs[index].url}
          key={pdfs[index].filename}
        />
      </ErrorBoundary>
    </div>
  )
}


export default PreviewPdfs


