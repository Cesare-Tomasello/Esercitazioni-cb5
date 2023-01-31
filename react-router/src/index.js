import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Users from "./routes/users";
import User from "./routes/user";
import Posts from "./routes/posts";
import Post from "./routes/post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
