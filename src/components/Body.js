import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
  ]);
  return (
    <RouterProvider router={appRouter}/>
  );
};

export default Body;
