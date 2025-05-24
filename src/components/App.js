import React from "react";
import "./../styles/App.css";
import AuthProvider from "./AuthProvider";
import ContextApi from "./ContextApi";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <ContextApi />
      </AuthProvider>
    </div>
  );
};

export default App;
