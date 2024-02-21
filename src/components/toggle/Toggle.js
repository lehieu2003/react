import React, { useState } from "react";
import "./ToggleStyle.css";
// // stateless functional component : component that only has a render method and no state
// function Toogle() {
//   return <div className="toogle"></div>;
// }
// // stateful functional component : component that has a state and a render method
// function Toggle2(){
//     const [on, setOn] = React.useState(false);
//     return <div className="toggle2"></div>
// }

function Toogle() {
  // there are 4 steps
  // 1. create a state variable (enable/disable state) : useState (initial value)
  // 2. create a function to update the state variable (initial value is false)
  // 3. pass the state variable to the component (read the value of the state variable)
  // 4. pass the update function to the component (update the value of the state variable)
  //   const array = useState(false);
  //   console.log(array); // [false, funtion]
  //   console.log(array[0]);
  //   console.log(array[1]);
  // useState(...) : ... boolean, string, number, object, array
  // re-render : when the state changes
  const [on, setOn] = useState(false);
  console.log(on, setOn);

  const handleToggle = (enable) => {
    //  setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on);
    // const [active, setActive] = useState(true);
    // if (enable) {
    //   const [active, setActive] = useState(true);
    // }
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toogle;
