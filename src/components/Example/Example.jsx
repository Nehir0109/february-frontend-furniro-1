import style from "./Example.module.scss";
import { useEffect, useState } from "react";
import reactLogo from "@/assets/react.svg";

// eslint-disable-next-line react/prop-types
export const Example = ({ sectionName }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.exampleContainer}>
      <h2>{sectionName || "Change Me"}</h2>
      <img src={reactLogo} className={style.logoReact} alt="React logo" />

      <button
        className={style.exampleButton}
        onClick={() => setCount((count) => count + 1)}
      >
        example is {count}
      </button>
      <button className={style.exampleButton} onClick={() => setCount(0)}>
        reset count to 0
      </button>
    </div>
  );
};
