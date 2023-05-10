import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();
  const [users, setusers] = useState(storedUser);
  const handleCreateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/${users._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User is Updated");
          event.target.reset("");
        }
      });
  };
  const handleBlurUser = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    setusers(newUser);
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleCreateUser}>
        <input
          type="text"
          onBlur={handleBlurUser}
          name="name"
          id=""
          defaultValue={storedUser.name}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="text"
          onBlur={handleBlurUser}
          name="address"
          id=""
          defaultValue={storedUser.address}
          placeholder="Enter address"
        />
        <br />
        <input
          type="tel"
          onBlur={handleBlurUser}
          name="phone"
          id=""
          defaultValue={storedUser.phone}
          placeholder="Enter Phone"
        />
        <br />
        <input
          type="email"
          onBlur={handleBlurUser}
          name="email"
          id=""
          defaultValue={storedUser.email}
          placeholder="Enter Email"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
      <Link to={"/users"}>Back to User List</Link>
    </div>
  );
};

export default Update;
