import React from "react"
import { Storage } from 'aws-amplify'


async function fetchImages() {
  let imageKeys = await Storage.list('')
  const imageOnlyKeys = imageKeys.filter(k => {
    const extention = k.key.split('.').pop() 
    return ( extention !== "pdf")
  })
  console.log("imageKeys", imageKeys)
  imageKeys = await Promise.all(imageOnlyKeys.map(async k => {
    console.log("k", k)
    const key = await Storage.get(k.key)
    return {url: key, filename: k.key}
  }))
  console.log('imageKeys: ', imageKeys)
  return imageKeys
}

async function fetchPdfs() {
  let pdfKeys = await Storage.list('')
  console.log("pdfKeys", pdfKeys)
  const pdfOnlyKeys = pdfKeys.filter(k => {
    const extention = k.key.split('.').pop() 
    return ( extention === "pdf")
  })
  console.log('pdfOnlyKeys: ', pdfOnlyKeys)
  return await Promise.all(pdfOnlyKeys.map( async k => {
    const key = await Storage.get(k.key)
    console.log('key: ', key)
    return key
  }))
}


export {
  fetchImages,
  fetchPdfs
}
