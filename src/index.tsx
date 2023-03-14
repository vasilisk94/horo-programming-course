import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flow } from "./Tasks/Flow/Flow";
import { Home } from "./Home";
import { Objects } from "./Tasks/Objects/Objects";
import { Arrays } from "./Tasks/Arrays/Arrays";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flow",
    element: <Flow />,
  },
  {
    path: "/objects",
    element: <Objects />,
  },
  {
    path: "/arrays",
    element: <Arrays />,
  },
]);

root.render(
  <React.StrictMode>
    <div style={{ padding: '30px' }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
