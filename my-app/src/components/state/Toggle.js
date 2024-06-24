import React, { useState } from "react";
// stateless functional component: component không có state
// stateful functional component: component có state
import "./ToggleStyle.css";

function Toggle() {
  //1. enable state: useState(initialize value)
  //2. initial state: useSatate(false)
  //3. read state:
  //4. update state:
  // const array = useState(false);
  // console.log(array); // [false, function()]
  //const arr = [1,2];
  //const [a,b] = arr; destructuring
  // initializ value: boolean(true/false), number(0), string(''), object(title: "Frontend Developer"), array([])

  const [isToggle, setIsToggle] = useState(false);
  // ví dụ khác về cách đặt tên biến
  // const [title, setTitle] = useState("Frontend Developer");
  // console.log(title); // Frontend Developer
  // [count, setCount] = useState(0);
  // state changes -> re-render component
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <div className={`toggle ${isToggle === true ? "toggle-active" : ""}`} onClick={handleToggle}>
        <div
          className={`spinner ${isToggle === true ? "spinner-active" : ""}`}
        ></div>
        <div className="toggle-control">
          Toggle: {isToggle ? "ON" : "OFF"}
          <div onClick={() => setIsToggle(true)}>On</div>
          <div onClick={() => setIsToggle(false)}>Off</div>
        </div>
      </div>
    </div>
  );
}
export default Toggle;
