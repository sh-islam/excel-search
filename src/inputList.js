import React, { useState } from 'react';
import './inputList.css';

const InputList = ({onSubmit, isFilePicked}) => {
  const [inputs, setInputs] = useState([{ columnName: '', cellValue: '' }]);

  const handleInputChange = (index, event, key) => {
    const newInputs = [...inputs];  // Create shallow copy (more memory) to avoid mutating original inputs arr   
    newInputs[index][key] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { columnName: '', cellValue: '' }]);
  };

  const handleRemoveInput = (index) => {
    if (inputs.length === 1) return; // Prevent removing the last input group
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    onSubmit(inputs);
  };

  // Disable if file isn't picked and only first inputs empty
  const isSubmitDisabled = !isFilePicked|| inputs[0].columnName === '' || inputs[0].cellValue === '';

  return (
    <div className="input-list">
      {inputs.map((input, index) => (
        <div key={index} className="input-group">
          <div className="label-group">
            <label>
              Column Name:
              <input
                type="text"
                value={input.columnName}
                onChange={(event) => handleInputChange(index, event, 'columnName')}
              />
            </label>
            <label>
              Cell Value:
              <input
                type="text"
                value={input.cellValue}
                onChange={(event) => handleInputChange(index, event, 'cellValue')}
              />
            </label>
          </div>
          <div className="button-group">
            <button type="button" onClick={handleAddInput}>+</button>
            <button type="button" onClick={() => handleRemoveInput(index)} disabled={inputs.length === 1}>-</button>
          </div>
        </div>
      ))}
      <button type="button" onClick={handleSubmit} disabled={isSubmitDisabled}>Set Conditions</button>
    </div>
  );
};

export default InputList;
