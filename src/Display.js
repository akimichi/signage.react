import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { useInterval } from './hooks/useInterval'
import { fetchImages } from './utils'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: "500"
`

const DisplayPage = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages().then(images => {
      console.log("images: ", images)
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
  }, 1000 * 10); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
         <StyledImage
            src={images[index]}
            key={images[index]}
            style={{width: 500}}
          />
      }
    </div>
  )

}
export default DisplayPage
