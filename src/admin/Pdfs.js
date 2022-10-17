import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
import { Document, Page } from 'react-pdf';
import awsconfig from '../aws-exports';
import {fetchPdfs} from '../utils';

const AdminPdfs = () => {
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
            pdfs.map(pdf => (
              <Document file={pdf}>
                <Page pageNumber={1}
                    src={pdf}
                    key={pdf}
                    style={{width: 500}}
                  />
              </Document>
            ))
          }
      </div>
    </>
  )
}

export default AdminPdfs;

