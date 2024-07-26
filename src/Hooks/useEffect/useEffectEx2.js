import { useEffect, useState } from "react";

const UseEffectEx2 = () => {
  const [xPosition, setXPosition] = useState(0);

  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", mouseTrack);
    return () => {
      window.removeEventListener("mousemove", mouseTrack);
    };
  }, []);

  const mouseTrack = (event) => {
    console.log(event);
    setXPosition(event.clientX);
    setYPosition(event.clientY);
  };

  return (
    <>
      <h2>UseEffectEx2</h2>
      <h3>current mouse position in X-Axis {xPosition}</h3>
      <h3>current mouse position in Y-Axis {yPosition}</h3>
    </>
  );
};
export default UseEffectEx2;
