import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [users, setusers] = useState({});

  const handleCreateUser = (event) => {
    event.preventDefault();
    console.log(users);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(`New user is created`);
          event.target.reset();
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
      <div className="displayuser">
        <Link to={"/users"}>
          <button>Display User</button>
        </Link>
      </div>
      <div>
        <form action="" onSubmit={handleCreateUser}>
          <input
            type="text"
            onBlur={handleBlurUser}
            name="name"
            id=""
            placeholder="Enter Name"
          />
          <br />
          <input
            type="text"
            onBlur={handleBlurUser}
            name="address"
            id=""
            placeholder="Enter address"
          />
          <br />
          <input
            type="tel"
            onBlur={handleBlurUser}
            name="phone"
            id=""
            placeholder="Enter Phone"
          />
          <br />
          <input
            type="email"
            onBlur={handleBlurUser}
            name="email"
            id=""
            placeholder="Enter Email"
          />
          <br />
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
