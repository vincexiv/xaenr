import React, {useEffect, useState} from "react";
import { apiHost } from "../../variables";
import "./UploadImage.css"

function UploadImage({setResults}){
    useEffect(()=>{

        const dropArea = document.getElementById('drop-area')
    
        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
          })
          
        function preventDefaults (e) {
            e.preventDefault()
            e.stopPropagation()
        }
    
        ;['dragenter', 'dragover'].forEach(eventName => {
          dropArea.addEventListener(eventName, highlight, false)
        })
        
        ;['dragleave', 'drop'].forEach(eventName => {
          dropArea.addEventListener(eventName, unhighlight, false)
        })
        
        function highlight(e) {
          dropArea.classList.add('highlight')
        }
        
        function unhighlight(e) {
          dropArea.classList.remove('highlight')
        }

        dropArea.addEventListener('drop', handleDrop, false)

        function handleDrop(e) {
          uploadFiles(getUploadedFiles(e))
        }

        function uploadFiles(imageFiles) {
          console.log("image file: ", imageFiles)
          fetch(`${apiHost}/get-match`, {
            method: 'POST',
            body: JSON.stringify({
              ref_sample: imageFiles,
              test_samples: []
            })
          })
          .then(res => {
            if(res.ok){
              res.json().then(data => {
                setResults({available: true, data: data})
              })
            }else {
              res.json().then(error => console.warn(error))
            }
          })
          .catch(() => { /* Error. Inform the user */ })
        }
    }, [])

    function getUploadedFiles(e){
      const dt = e.dataTransfer
      const files = dt.files
      return files
    }
    

    return (
      <div id="upload-image">
        <div id="drop-area">
            <form className="my-form">
                <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                <input type="file" id="fileElem" multiple accept="image/*"/>
                <label className="button" htmlFor="fileElem">Select some files</label>
            </form>
        </div>
      </div>
    )
}

export default UploadImage