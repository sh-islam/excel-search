import React from "react";
import * as XLSX from "xlsx";

// Helper function to parse the condition string
const parseCondition = (value) => {
  const match = value.match(/([<>]=?|=)\s*(.*)/);
  if (match) {
    return { operator: match[1], value: match[2] };
  }
  return { operator: "=", value }; // Default regular comparison (assignment of given value)
};

// Helper function to compare values based on the operator
const compareValues = (cellValue, operator, conditionValue) => {
  const cellNumber = parseFloat(cellValue);
  const conditionNumber = parseFloat(conditionValue);

  switch (operator) {
    case ">":
      return cellNumber > conditionNumber;
    case ">=":
      return cellNumber >= conditionNumber;
    case "<":
      return cellNumber < conditionNumber;
    case "<=":
      return cellNumber <= conditionNumber;
    case "=":
    default:
      return cellValue === conditionValue;
  }
};

const ExcelSearch = ({ searchFile, searchConditions }) => {
  const handleSearch = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const validConditions = searchConditions.filter(
        (condition) => condition.columnName !== "" || condition.cellValue !== ""
      );

      const filteredRows = worksheet.filter((row) => {
        return validConditions.every((condition) => {
          const parsedCondition = parseCondition(condition.cellValue);
          const cellValue = row[condition.columnName];
          if (cellValue === undefined) return false;
          return compareValues(
            cellValue,
            parsedCondition.operator,
            parsedCondition.value
          );
        });
      });

      downloadFilteredRows(filteredRows);
    };
    reader.readAsArrayBuffer(searchFile);
    // alert("File has been downloaded successfully.")
    // window.location.reload();
  };

  const downloadFilteredRows = (rows) => {
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "FilteredRows");
    XLSX.writeFile(newWorkbook, "filtered_rows.xlsx");
  };

  return (
    <div>
      <button onClick={handleSearch}>Search and Download</button>
    </div>
  );
};

export default ExcelSearch;
