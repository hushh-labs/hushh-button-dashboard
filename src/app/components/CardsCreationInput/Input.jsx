import React, { useState } from 'react';
import './Input.css';

function Input({ onFileChange }) {
  const [fileNames, setFileNames] = useState({
    bodyImage: '',
    logoImage: '',
    nameImage: ''
  });

  const handleFileChange = (event, inputType) => {
    const file = event.target.files[0];
    if (file) {
      setFileNames({
        ...fileNames,
        [inputType]: file.name
      });
      if (onFileChange) {
        onFileChange(inputType, file);
      }
    }
  };

  return (
    <div className='Input__mainContainer'>
      <label className="Input__customButton">
        <input
          type="file"
          name="bodyImage"
          onChange={(event) => handleFileChange(event, 'bodyImage')}
        />
        <span>{fileNames.bodyImage || 'Add Body Image'}</span>
      </label>
      <label className="Input__customButton">
        <input
          type="file"
          name="logoImage"
          onChange={(event) => handleFileChange(event, 'logoImage')}
        />
        <span>{fileNames.logoImage || 'Add Logo Image'}</span>
      </label>
      <label className="Input__customButton">
        <input
          type="file"
          name="nameImage"
          onChange={(event) => handleFileChange(event, 'nameImage')}
        />
        <span>{fileNames.nameImage || 'Add Name Image'}</span>
      </label>
    </div>
  );
}

export default Input;
