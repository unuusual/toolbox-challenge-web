import React, { memo } from 'react';
import Table from 'react-bootstrap/Table';

const CustomTable = memo(({ data }) => {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th scope="col">File</th>
          <th scope="col">Text</th>
          <th scope="col">Number</th>
          <th scope="col">Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row?.file}</td>
            <td>{row?.text}</td>
            <td>{row?.number}</td>
            <td>{row?.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default CustomTable;