import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
        <h3>This is Main Page</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
