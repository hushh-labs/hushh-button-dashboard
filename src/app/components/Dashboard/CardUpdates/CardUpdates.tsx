import React from 'react';
import './CardUpdates.css'; // Import your CSS file

const DataCardUpdates = () => {
  const data = [
    { id: 1, name: 'Fashion card', status: 'Active' },
    { id: 2, name: 'E-book card', status: 'Draft' },
    { id: 3, name: 'Travel Card', status: 'Draft' },
    { id: 4, name: 'E-book card', status: 'Draft' },
    { id: 5, name: 'E-book card', status: 'Draft' },
    { id: 6, name: 'E-book card', status: 'Draft' },
  ];

  return (
    <div className="data-card-updates">
      <div className="header">
        <h2>RECENT DATA CARD UPDATES</h2>
        <button className="filter-button">Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Card Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1 < 10 ? `0${index + 1}` : index + 1}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td><a href="#">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataCardUpdates;
