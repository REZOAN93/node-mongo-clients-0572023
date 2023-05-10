import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserList = () => {
  const users = useLoaderData();
  const [displayuser, setDisplayUser] = useState(users);

  const handleDelete = (usr) => {
    const confirm = window.confirm(
      `Are you sure you want to delete the user ${usr.name}`
    );

    if (confirm) {
      fetch(`http://localhost:5000/users/${usr._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`User deleted Successfully ${usr.name}`);
            const remainingUser = displayuser.filter(
              (user) => user._id !== usr._id
            );
            setDisplayUser(remainingUser);
          }
        });
    }
  };
  return (
    <div className="App">
      <h1>Total User: {displayuser.length}</h1>
      {displayuser.map((usr) => (
        <p key={usr._id}>
          {usr.name} {usr.email}{" "}
          <Link to={`/update/${usr._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(usr)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default UserList;
