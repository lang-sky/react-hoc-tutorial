import React, { useState } from "react";

export const withCountState = (Wrapped) => (props) => {
  const [count, setCount] = useState(0);

  return <Wrapped {...props} count={count} setCount={setCount} />;
};

export const withCountState1 = (Wrapped) => {
  return function (props) {
    const [count, setCount] = useState(0);

    props.count = count;
    props.setCount = setCount;

    return <Wrapped {...props} />;
  };
};

export function withCountState2(Wrapped) {
  return function (props) {
    const [count, setCount] = useState(0);

    const newProps = { ...props, count, setCount };

    return <Wrapped {...newProps} />;
  };
}
