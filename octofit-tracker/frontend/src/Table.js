import React from 'react';

const Table = ({ data }) => (
  <table className="table table-striped table-bordered">
    <thead className="table-dark">
      <tr>
        {Object.keys(data[0] || {}).map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {Object.values(row).map((val, i) => (
            <td key={i}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
