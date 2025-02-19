import "./example.scss";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";

export const Example = ({ sectionName }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="exampleContainer">
        <h2>{sectionName ? sectionName : "Change Me"}</h2>
        <img src={reactLogo} className="logoReact" alt="React logo" />

        <button
          className="exampleButton"
          onClick={() => setCount((count) => count + 1)}
        >
          example is {count}
        </button>
        <button className="exampleButton" onClick={() => setCount(0)}>
          reset count to 0
        </button>
      </div>
    </>
  );
};
