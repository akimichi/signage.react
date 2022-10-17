import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports';
import fetchPdfs from '../utils';

const AdminPdf = () => {
  const [pdfs, setPdfs] = useState([])

  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file, {
      contentType: 'application/pdf'
    })
    console.log({ result })
    fetchPdfs().then(pdfs => {
      console.log("pdfs: ", pdfs)
      setPdfs(pdfs)
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

export default AdminPdf;

