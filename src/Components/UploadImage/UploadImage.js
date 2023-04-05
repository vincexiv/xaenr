import React, {useEffect } from "react";
import { apiHost } from "../../variables";
import "./UploadImage.css"

function UploadImage(){
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
            const files = e.dataTransfer.files
            ([...files]).forEach(uploadFile)
        }

        function uploadFile(imageFile) {
          fetch(`${apiHost}/get-match`, {
            method: 'POST',
            body: JSON.stringify({
              ref_sample: imageFile,
              test_samples: []
            })
          })
          .then(() => { /* Done. Inform the user */ })
          .catch(() => { /* Error. Inform the user */ })
        }
    }, [])
    

    return (
        <div id="drop-area">
            <form className="my-form">
                <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                <input type="file" id="fileElem" multiple accept="image/*" />
                <label className="button" htmlFor="fileElem">Select some files</label>
            </form>
        </div>
    )
}

export default UploadImage