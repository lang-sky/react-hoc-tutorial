import React from "react";
import { withFunctions } from "../hocs/withFunctions";

const WrappedComponent = ({ email, onEmailUpdate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <input value={email} type="text" onChange={onEmailUpdate} />
      <p>{email}</p>
    </div>
  );
};

export default withFunctions(WrappedComponent);
