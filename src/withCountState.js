import React, { useState } from "react";

const withCountState = (Wrapped) => {
  return function (props) {
    const [count, setCount] = useState(0);

    return <Wrapped {...props} count={count} setCount={setCount} />;
  };
};

export default withCountState;
