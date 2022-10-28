import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { Heading, Image, Divider } from '@aws-amplify/ui-react';
// import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react/legacy';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';
import { createSlide } from '../graphql/mutations'
import { fetchImages } from '../utils'

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


const AdminImages = () => {
  const [images, setImages] = useState([])


  useEffect(() => {
     fetchImages().then(items => {
       console.log("items", items)
       setImages(items)
     })
  }, [])


  return (
    <AmplifyS3ImagePicker />
  )

}

  // async function onChange(e) {
  //   const file = e.target.files[0];
  //   const { filename } = await Storage.put(file.name, file, {
  //     contentType: 'image/png'
  //   })
  //   const url = await Storage.get(filename)
  //   // createSlide({input: {filename, url}})
  //   fetchImages().then(images => {
  //     console.log("images@fetchImages: ", images)
  //     setImages(images)
  //   })
  // }

  // return (
  //   <>
  //     <input
  //         type="file"
  //         onChange={onChange}
  //     />
  //     <div style={{ display: 'flex', flexDirection: 'column' }}>
  //         {
  //           images && images.map(image => (
  //             <>
  //               <Heading> {image.filename} </Heading>
  //               <Image
  //                 src={image.url}
  //                 key={image.filename}
  //                 style={{width: 500}}
  //               />
  //               <Divider orientation="horizontal" />
  //             </>
  //           ))
  //         }
  //     </div>
  //   </>
  // )
export default AdminImages;
