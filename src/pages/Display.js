import React, {useEffect, useState} from "react"
import { useInterval } from '../hooks/useInterval'
import { fetchImages } from '../utils'
import { Storage, Cache } from 'aws-amplify'
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//   }
// `;

const FadeIn = styled.img`
   display: inline-block;
   height: 100%;
   margin-right: calc(50% - 50vw);
   margin-left: calc(50% - 50vw);
   animation: ${fadeIn} 5s ease-in-out;
`;
// const FadeIn = styled.img`
//    display: inline-block;
//    height: 1920px;
//    width: 1080px;
//    margin-right: calc(50% - 50vw);
//    margin-left: calc(50% - 50vw);
//    animation: ${fadeIn} 5s ease-in-out;
// `;

const DisplayPage = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [visible, setVisible] = useState(true)
  const dutation = 2*60*1000

  useEffect(() => {
    const gotImages = fetchImages()
    gotImages.then(items => {
      console.log("items@DisplayPage", items)
      setImages(items)
      items.map( async (item) => {
        const result = await Storage.get(item.filename, { download: true });
        console.log("result@DisplayPage", result)

        // data.Body is a Blob
        // result.Body.text().then(string => { 
        //   // handle the String data return String 
        // });
      })
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
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      {
           <FadeIn
              src={images[index]?.url}
              key={images[index]?.filename}
            />
      }
    </div>
  )

}
export default DisplayPage
