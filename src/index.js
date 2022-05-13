import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = React.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <GlobalStyles>
//       <App />
//     </GlobalStyles>
//   </React.StrictMode>
// );
