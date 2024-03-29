import { Amplify, Auth } from "aws-amplify";
import React from "react"
import { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

async function fetchImages() {
  let imageKeys = await Storage.list('')
  const imageOnlyKeys = imageKeys.filter(k => {
    const extention = k.key.split('.').pop() 
    return ( extention !== "pdf")
  })
  console.log("imageKeys", imageKeys)
  imageKeys = await Promise.all(imageOnlyKeys.map(async k => {
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
    return {url: key, filename: k.key}
  }))
}

function ErrorFallback({ error }) {
  console.error("error", error)
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
    </div>
  )
}


export {
  fetchImages,
  fetchPdfs,
  ErrorFallback
}
