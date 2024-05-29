import React from 'react';
import { Link } from 'react-router-dom';
import "./example.css"
import NameSearch from './example-images/name_search.png';
import NameAgeSearch from './example-images/name_age_search.png';
import AgeRangeSearch from './example-images/age_range_search.png'

const Examples = () => {
  const exampleTableData = [
    { name: 'John', age: 5, etc: 123 },
    { name: 'Johns', age: 22, etc: 456 },
    { name: 'john', age: 30, etc: 789 },
    { name: 'John', age: 100, etc: 101 },
    { name: 'Johns', age: 45, etc: 202 },
    { name: 'john', age: 55, etc: 303 },
    { name: 'John', age: 60, etc: 404 },
    { name: 'Johns', age: 75, etc: 505 },
    { name: 'john', age: 80, etc: 606 },
    { name: 'John', age: 95, etc: 707 },
  ];

  const filterByJohn = exampleTableData.filter(row => row.name === 'John');
  const filterByJohnAndAge = exampleTableData.filter(row => row.name === 'John' && row.age === 100);
  const filterByAgeRange = exampleTableData.filter(row => row.age >= 50 && row.age <= 100);

  return (
    <div className='examples'>
      <h1>Examples</h1>
      <div className='example-intro'>
        <h2>Example Table</h2>
        <p>For examples on this page, assume we have a <strong>xlsx</strong> file with the following data:</p>
        <table className='example-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Etc</th>
            </tr>
          </thead>
          <tbody>
            {exampleTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.etc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='search-by-name ex-section'>
        <h2>Searching</h2>
        <p>
          To perform a simple search, add the column name and value you want to search for. 
          <br/>
          For example, we can search for all occurrences of "John" like so:
        </p>
        <img src={NameSearch} className="search-img" alt="Searching by names"/>
        <ul className='example-note'>
          <p>Note:</p>
          <ol>
            <li><strong>A file must be selected and the conditions must be set</strong> in order for the download button to appear.</li>
            <li>Column names and values are <strong>case sensitive</strong>.</li>
          </ol>
        </ul>
        <br/>
        <p>The search will download an excel sheet with the following data:</p>
        <table className='table-by-name'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Etc</th>
            </tr>
          </thead>
          <tbody>
            {filterByJohn.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.etc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='search-by-name-age ex-section'>
        <h2>Adding Search Conditions</h2>
        <p>Conditions can be added by clicking on the + button.</p>
        <p>To find rows with the name John and age 100, we do the following:</p>
        <img src={NameAgeSearch} className="search-img" alt="Searching by name and age"/>
        <p>Resulting in:</p>
        <table className='table-by-name-age'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Etc</th>
            </tr>
          </thead>
          <tbody>
            {filterByJohnAndAge.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.etc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='search-by-age-range ex-section'>
        <h2>Searching by Range</h2>
        <p>
          We can search on ranges of data by using &gt;=,&lt;=, &gt;, and &lt;
          <br/>
          For example, to find everyone between 50 and 100 (inclusive), we do the following:
        </p>
        <img src={AgeRangeSearch} className="search-img" alt="Searching by age"/>
        <p>Resulting in:</p>
        <table className='table-by-age-range'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Etc</th>
            </tr>
          </thead>
          <tbody>
            {filterByAgeRange.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.etc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{marginTop: "100px", marginBottom: "50px", textAlign: "center"}}><Link to="/">Back to Home</Link></p>
    </div>
  );
};

export default Examples;
