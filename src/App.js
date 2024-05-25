import "./App.css";
import React, { useState } from "react";
import NavBar from "./navbar"
import InputList from "./inputList";
import FileBrowser from "./fileBrowser"; // Import the FileBrowser component
import ExcelSearch from "./excelSearch"; // Ensure correct import based on export type

const App = () => {
  const [searchInfo, setSearchInfo] = useState([]);
  const [file, setFile] = useState(null);

  const handleSubmit = (inputs) => {
    console.log("From app:", inputs);
    setSearchInfo(inputs);
  };

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div className="App">
      <NavBar/>
      <h1>Searching Excel Sheets</h1>
      <div className="Instructions">
        <p>
          This app will search through your
          <strong> Excel </strong> file and find rows that meet your search
          criteria.
          <br />
          <br />
          Returned rows will have highlighted cells based on the cell value.
          <br />
          Cell values accept comparison operators such as &gt;=, &lt;=, &gt;,
          and &lt;.
          <br />
          To find a range, create another condition with the same column name
          and set comparison.
          <br />
          See here for examples.
        </p>
      </div>
      
      <FileBrowser onFileSelect={handleFileSelect} />
      <InputList onSubmit={handleSubmit} isFilePicked={Boolean(file)} />{" "}
      {/* Pass true if file is set, false otherwise */}
      {file && searchInfo.length > 0 && (
        <ExcelSearch searchFile={file} searchConditions={searchInfo} />
      )}
    </div>
  );
};

export default App;
