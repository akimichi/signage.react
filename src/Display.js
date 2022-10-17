import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { useInterval } from './hooks/useInterval'
import { fetchImages } from './utils'
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledImage = styled.img`
 background: #f3e2b3;
 margin-right: calc(50% - 50vw);
 margin-left: calc(50% - 50vw);
 animation: ${fadeIn} 5s ease-in-out;
`
const Fade = styled.div`
  display: inline-block;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
  transition: visibility 1s linear;
`;

const FadeIn = styled.div`
  animation: ${fadeIn} .5s ease-in-out;
`;

const DisplayPage = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [visible, setVisible] = useState(true)

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
            />
      }
    </div>
  )

}
export default DisplayPage
