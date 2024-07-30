import React from "react";
import "./userlist.css";

const UserList = ({ users }) => {
  return (
    <>
      <table className="user-list">
        <thead className="heading">
          <th className="content">Name</th>
          <th className="content">Email</th>
          <th className="content">Phone-No</th>
        </thead>
        {users.map((user) => (
          <tr key={user.id} className="user-item">
            <td>{user.name} </td>
            <td>{user.email}</td>
            <td> {user.phone}</td>
      
          </tr>
        ))}
      </table>
    </>
  );
};

export default UserList;
