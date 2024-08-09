import React from 'react';
import './User.css';

function User() {
  const users = [
    { id: 1, name: 'John Doe', firstSeen: '12/12/2021', lastSeen: '12/12/2021', profileImg: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Smith', firstSeen: '12/11/2021', lastSeen: '12/11/2021', profileImg: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Sam Johnson', firstSeen: '12/10/2021', lastSeen: '12/10/2021', profileImg: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Linda Davis', firstSeen: '12/09/2021', lastSeen: '12/09/2021', profileImg: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Chris Brown', firstSeen: '12/08/2021', lastSeen: '12/08/2021', profileImg: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className='User__mainContainer'>
      <table className='User__table'>
        <thead>
          <tr>
            <th>User</th>
            <th>First seen</th>
            <th>Last seen</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className='User__info'>
                <img src={user.profileImg} alt={`${user.name} profile`} className='User__img' />
                <span>{user.name}</span>
              </td>
              <td>{user.firstSeen}</td>
              <td>{user.lastSeen}</td>
              <td><a href='#' className='User__actionLink'>View profile</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
