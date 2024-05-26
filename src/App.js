import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./navbar";
// import Footer from "./footer";
import InputList from "./inputList";
import FileBrowser from "./fileBrowser";
import ExcelSearch from "./excelSearch";
import Examples from "./example"; 

const App = () => {
  const [searchInfo, setSearchInfo] = useState([]);
  const [file, setFile] = useState(null);

  const handleConditionsSet = (inputs) => {
    console.log("From app:", inputs);
    setSearchInfo(inputs);
  };

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Searching Excel Sheets</h1>
                <div className="Instructions">
                  <p>
                    This app will search through your <strong>Excel</strong>{" "}
                    file and find rows that meet your search criteria.
                    <br />
                    <br />
                    {/* Returned rows will have highlighted cells based on the
                    cell value. */}
                    <br />
                    Cell values accept comparison operators such as &gt;=,
                    &lt;=, &gt;, and &lt;.
                    <br />
                    To find a range, create another condition with the same
                    column name and set comparison.
                    <br />
                    See here for examples.
                  </p>
                </div>
                <FileBrowser onFileSelect={handleFileSelect} />
                <InputList
                  onSubmit={handleConditionsSet}
                  isFilePicked={Boolean(file)}
                />
                {file && searchInfo.length > 0 && (
                  <ExcelSearch
                    searchFile={file}
                    searchConditions={searchInfo}
                  />
                )}
              </>
            }
          />
          <Route path="/example" element={<Examples/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
