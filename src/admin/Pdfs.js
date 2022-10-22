import { Amplify, Auth } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { Storage } from 'aws-amplify'
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import awsconfig from '../aws-exports';
import {fetchPdfs} from '../utils';


const AdminPdfs = () => {
  const [pdfs, setPdfs] = useState([])
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const gotPdfs = fetchPdfs()
    console.log("gotPdfs", gotPdfs)
    gotPdfs.then(items => {
      console.log("items", items)
      setPdfs(items)
    })
  }, [])
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
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <input
          type="file"
          onChange={onChange}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            pdfs.map(pdf => {
              console.log("pdf", pdf)
              return (
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={1} />
                </Document>
              )
            })
          }
      </div>
    </>
  )
}

export default AdminPdfs;

