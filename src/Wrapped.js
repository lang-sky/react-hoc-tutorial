import React from "react";
import withCountState from "./withCountState";

const Wrapped = ({ count, setCount }) => {
  return (
    <>
      <button onClick={() => setCount((cnt) => cnt + 1)}>Increase</button>
      <p>{count}</p>
    </>
  );
};

export default withCountState(Wrapped);
