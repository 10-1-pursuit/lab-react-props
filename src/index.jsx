import React from "react";
// import ReactDOM from "react-dom";
// added the below to use the new React 18 createRoot method.
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Changed the below to the above to use the new React 18 createRoot method.

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
