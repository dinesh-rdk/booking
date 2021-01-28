import { useState, useEffect, useRef } from "react";

export default function DynamicImage() {
  const [counter, setCounter] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const fetchDataInterval = setInterval(() => setCounter(counter + 1), 5000);
    return () => {
      clearInterval(fetchDataInterval);
    };
  }, [counter]);

  const onClickImage = (e) => {
    const { offsetTop, offsetLeft } = imageRef.current;
    var relativeX = e.pageX - offsetLeft;
    var relativeY = e.pageY - offsetTop;
    console.log("Position X Y -> ", relativeX, relativeY);
  };

  return (
    <div>
      <img
        ref={imageRef}
        onClick={onClickImage}
        src={`https://picsum.photos/500/500?${counter}`}
        alt="DynamicImage"
      />
    </div>
  );
}
