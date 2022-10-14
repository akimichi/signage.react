import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


const AdminImages = () => {
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

  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file, {
      contentType: 'image/png'
    })
    console.log({ result })
    fetchImages()
  }

  return (
    <>
      <input
          type="file"
          onChange={onChange}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
          images.map(image => (
              <img
                src={image}
                key={image}
                style={{width: 500, height: 300}}
              />
          ))
          }
      </div>
    </>
  )
}
export default AdminImages;
