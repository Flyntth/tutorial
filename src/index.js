import React from "react";
import ReactDOM from "react-dom/client";
const Greetings = () => {
  return <h2>My first component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);

export default Greetings;
