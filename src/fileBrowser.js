import React from 'react';
import './fileBrowser.css';

const FileBrowser = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="file-browser">
      <label className="file-label" htmlFor="file-input">
        <input
          id="file-input"
          className="file-input"
          type="file"
          accept=".xlsx" // Only accepting xlsx format 
          onChange={handleFileChange}
          aria-label="Choose File"
        />
      </label>
    </div>
  );
};

export default FileBrowser;
