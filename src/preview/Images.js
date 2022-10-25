import React, {useEffect, useState} from "react"
import { Amplify, Auth } from "aws-amplify";
import awsconfig from '../aws-exports';
// import Layout from '../../components/layout'
import { useInterval } from '../hooks/useInterval'
import { fetchImages } from '../utils'
import FadeIn from '../components/FadeIn'
// import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from '../components/ErrorFallback'

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const PreviewImages = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [visible, setVisible] = useState(true)
  const dutation = 30*1000

  useEffect(() => {
    const gotImages = fetchImages()
    gotImages.then(items => {
      console.log("items", items)
      setImages(items)
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
        <h2> {images[index]?.filename} </h2>
        <FadeIn
          src={images[index]?.url}
        />
    </div>
  )
}


export default PreviewImages

