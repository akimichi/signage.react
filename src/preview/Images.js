import React, {useEffect, useState} from "react"
import { Amplify, API, Auth, Storage, graphqlOperation } from "aws-amplify";
// import awsconfig from '../aws-exports';
// import Layout from '../../components/layout'
import { useInterval } from '../hooks/useInterval'
import { fetchImages } from '../utils'
import FadeIn from '../components/FadeIn'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'

const PreviewImages = ({data}) => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [visible, setVisible] = useState(true)
  const dutation = 30*1000

  useEffect(() => {
    fetchImages().then(images => {
      console.log("images", images)
      // setImages(images.map(item => item.url))
      setImages(images)
    })
  }, [])

  useInterval(() => {
    // Your custom logic here
    if(index >= images.length -1) {
      setIndex(0)
    } else {
      setIndex((index) =>  index + 1);
    }
    setVisible(true)
  }, dutation); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        { console.log("images", images)}
        <h2> {images[index].filename} </h2>
        <FadeIn
          src={images[index].url}
          key={images[index].filename}
        />
      </ErrorBoundary>
    </div>
  )
}


export default PreviewImages

