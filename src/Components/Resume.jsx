import React from "react";
import {useState} from 'react';
import{Worker,Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function Resume(){
  const resumeFileName = 'Resume.pdf';
  const[isHovered, setIsHovered] = useState(false);

  return(
    <div style={{textAlign:'center'}}>
      <h1>My Resume</h1>
      <div style={{height:'600px',border:'1px solid black',margin:'0 auto',maxWidth:'800px'}}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer fileUrl={`${process.env.PUBLIC_URL}/${resumeFileName}`}></Viewer>
        </Worker>
      </div>
      <a href={`${process.env.PUBLIC_URL}/${resumeFileName}`}
         download
         style={{
         display:'flex',
         flexDirection:'column',
         marginTop:'30px',
         border:'1px solid white',
         padding:'10px 8px',
         marginLeft:'200px',
          marginRight:'250px',
          borderRadius:'5px',
          backgroundColor:'blue',
          textDecoration:'none',
          background : isHovered ? 'white' : 'blue',
          color : isHovered ? 'black' : 'white',
          border:'none', 
         }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Download Resume
      </a>
    </div>
  );

}
export default Resume;