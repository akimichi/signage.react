import React from "react"
import { Storage } from 'aws-amplify'


async function fetchImages() {
  let imageKeys = await Storage.list('')
  console.log("imageKeys", imageKeys)
  imageKeys = await Promise.all(imageKeys.map(async k => {
    console.log("k", k)
    const key = await Storage.get(k.key)
    return key
  }))
  console.log('imageKeys: ', imageKeys)
  return imageKeys
}

export {
  fetchImages
}
