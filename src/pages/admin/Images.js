import { Amplify, Auth, Hub } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { Heading, Image, Divider, Button } from '@aws-amplify/ui-react';
// import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react/legacy';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../../aws-exports';
import { createSlide } from '../../graphql/mutations'
import { fetchImages } from '../../utils'

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


const AdminImages = () => {
  const [imageUpdated, setImageUpdated] = useState(true)
  const [images, setImages] = useState([])

  useEffect(() => {
    Hub.listen("storage", ({ payload }) => {
      console.log("payload@AdminImages",payload)
      if (payload.event === "upload" && payload.message) {
        const imageKey = payload.message.replace("Upload success for ", "")
        if (payload.data.attrs.result === "success") {
          console.log(`アップロードに成功しました。`)
          setImageUpdated(true)
          // setImages((prevImages) => {
          //   return [{filename: imageKey}, ...prevImages]
          // })

        } else {
          Storage.remove(imageKey)
          console.log(`アップロードに失敗しました。`)
        }
      }
    })

    return () => {
      Hub.remove("storage", () => {})
    }
  }, [])

  useEffect(() => {
    fetchImages().then(items => {
      // console.log("items", items)
      setImages(items)
    })
    setImageUpdated(false)
  }, [imageUpdated])


  const handleUpload = (data) => {
    return data.name
  }
  const handleRemove = async (filename) => {
    await Storage.remove(filename);
    console.log("filename@handleRemove", filename)
    setImages((prevImages) => {
      // console.log("prevImages@handleRemove", prevImages)
      return prevImages.filter(image => image.filename !== filename)
    })
    return;
  }
  return (
    <>
      <AmplifyS3ImagePicker 
        fileToKey={handleUpload}
        track
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            images && images.map(image => (
              <div key={image.url}>
                <Heading> 
                  {image.filename} 
                  <Button
                    loadingText=""
                    onClick={() => handleRemove(image.filename)}
                    ariaLabel=""
                    >
                    削除する
                  </Button>
                </Heading>
                <Image
                  src={image.url}
                  key={image.filename}
                  style={{width: 500}}
                />
                <Divider orientation="horizontal" />
              </div>
            ))
          }
      </div>
    </>
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
