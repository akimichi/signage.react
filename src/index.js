import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from "./Home";
import Login from "./Login";
import AdminIndex from "./admin/index.js";
import AdminImages from "./admin/Images";
import AdminPdfs from "./admin/Pdfs";
import DisplayPage from "./Display";
import ErrorPage from "./ErrorPage";
import reportWebVitals from './reportWebVitals';
import './index.css';

Amplify.configure(awsconfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/admin/`} element={<AdminIndex />} />
          <Route path={`/display/`} element={<DisplayPage />} />
          <Route path={`/admin/images`} element={<AdminImages />} />
          <Route path={`/admin/pdfs`} element={<AdminPdfs />} />
        </Routes>
      </BrowserRouter>
  {/*
    <RouterProvider router={router} />
    */}
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
