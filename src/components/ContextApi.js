import React from "react";
import { useAuth } from "./AuthProvider";
const ContextApi = () => {
  const { ishuman, setIsHuman } = useAuth();
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {ishuman ? (
        <p className="authText">You are now authenticated, you can proceed</p>
      ) : (
        <p lassName="authText">you are not authenticated</p>
      )}
      <input
        type="checkbox"
        value={ishuman}
        onChange={(e) => setIsHuman(e.target.value)}
      />
    </div>
  );
};

export default ContextApi;
