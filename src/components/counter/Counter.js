import React from "react";

const Counter = () => {
  // stale closure : when the function is called, it will have access to the old state value
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  return <div onClick={handleIncrement}>Increament {count}</div>;
};

export default Counter;
