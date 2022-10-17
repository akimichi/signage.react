import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { useInterval } from './hooks/useInterval'
import { fetchImages } from './utils'

const DisplayPage = () => {

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])

  // async function fetchImages() {
  //   let imageKeys = await Storage.list('')
  //   console.log("imageKeys", imageKeys)
  //   imageKeys = await Promise.all(imageKeys.map(async k => {
  //     console.log("k", k)
  //     const key = await Storage.get(k.key)
  //     return key
  //   }))
  //   console.log('imageKeys: ', imageKeys)
  //   // setImages(imageKeys)
  //   return imageKeys
  // }
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
         <img
            src={images[index]}
            key={images[index]}
            style={{width: 500}}
          />
      }
    </div>
  )

}
export default DisplayPage
