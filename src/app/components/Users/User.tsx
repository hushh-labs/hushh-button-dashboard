"use client";
import React, { useEffect, useState } from "react";
import "./User.css";
import qs from "qs";

function User() {
  const [users, setUsers] = useState<{ id: number; name: string; firstSeen: string; lastSeen: string; profileImg: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const brand = JSON.parse(localStorage.getItem("brand"));
      const brandID = brand?.brand_id; // Safely access brand_id
      
      const formData = qs.stringify({ brandID });

      const response = await fetch('http://localhost:3001/button-Admin/v1/admin/get-users-of-shared-brand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        // Map API response to the format required by the component
        const fetchedUsers = result.data.map((user: any, index: number) => ({
          id: index + 1, // Assuming id is auto-generated based on index
          name: user.from_user_name,
          profileImg: user.from_user_avatar,
          firstSeen: "N/A", // Replace with actual data if available
          lastSeen: "N/A", // Replace with actual data if available
        }));
        setUsers(fetchedUsers);
      } else {
        setError(result.message || "Failed to fetch users."); // Update to use result.message
      }
    } catch (error) {
      setError("Network error occurred.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; // Ensure error is rendered as a string

  return (
    <div className="User__mainContainer">
      {users.length > 0 ? (
        <table className="User__table">
          <thead>
            <tr>
              <th>User</th>
              <th>First seen</th>
              <th>Last seen</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="User__info">
                  <img src={user.profileImg} alt={`${user.name} profile`} className="User__img" />
                  <span>{user.name}</span>
                </td>
                <td>{user.firstSeen}</td>
                <td>{user.lastSeen}</td>
                <td><a href="#" className="User__actionLink">View profile</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users have shared their data.</p>
      )}
    </div>
  );
}

export default User;
