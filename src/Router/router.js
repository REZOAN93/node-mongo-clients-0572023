import { createBrowserRouter } from "react-router-dom";
import AddUser from "../Components/AddUser/AddUser";
import Main from "../Components/Main/Main";
import Update from "../Components/Update/Update";
import UserList from "../Components/UserList/UserList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/users",
        element: <UserList />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/",
        element: <AddUser />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/user/${params.id}`),
      },
    ],
  },
]);
