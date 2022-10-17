import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports';
import { fetchImages } from '../utils'

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


const AdminImages = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages().then(images => {
      console.log("images: ", images)
      setImages(images)
    })
  }, [])


  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file, {
      contentType: 'image/png'
    })
    console.log({ result })
    fetchImages().then(images => {
      console.log("images: ", images)
      setImages(images)
    })
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
                style={{width: 500}}
              />
          ))
          }
      </div>
    </>
  )
}
export default AdminImages;
