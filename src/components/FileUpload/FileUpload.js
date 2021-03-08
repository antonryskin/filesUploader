import { useState } from 'react'
import ImageThumb from '../ImageThumb/ImageThumb'

function FileUpload() {
  const [file, setFile] = useState("");

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
    </div>
  );
}
export default FileUpload;
