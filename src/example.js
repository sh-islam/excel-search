import React from 'react';
import { Link } from "react-router-dom";

const Examples = () => {
  return (
    <div>
      <h1>Examples</h1>
      <h2>Example 1</h2>
      <p>Ex 1 content</p>
      <p><Link to="/">Back to Home</Link></p> 
    </div>
  );
};

export default Examples;
