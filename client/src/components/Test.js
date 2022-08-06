import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home/home";
export default function Test() {
  const [number, setNumber] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    console.log("Hello");
  }, [number]);
  // },[number,name])

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
          nav("/", { state: { name: "abhinav is sassy" } });
        }}
      >
        {number}
      </button>
    </div>
  );
}
