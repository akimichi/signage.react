import React, {useEffect, useState} from "react"
import { useInterval } from '../hooks/useInterval'

const DisplayPage = ({data}) => {
  // console.log("data", data)

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    let imageKeys = await Storage.list('')
    console.log("imageKeys", imageKeys)
    imageKeys = await Promise.all(imageKeys.map(async k => {
      console.log("k", k)
      const key = await Storage.get(k.key)
      return key
    }))
    console.log('imageKeys: ', imageKeys)
    setImages(imageKeys)
  }

  useInterval(() => {
    // Your custom logic here
    if(index >= images.length -1) {
      setIndex(0)
    } else {
      setIndex((index) =>  index + 1);
    }
  }, 1000 * 10); 

  return (
    {
      images.map(image => (
        <img
          src={image}
          key={image}
          style={{width: 500}}
        />
      ))
    }

  )
}
export default DisplayPage
