import { useEffect, useRef } from "react";

const ExpandingCircleCanvas = () => {
  const canvasRef = useRef(null);
  let size = 25;
  const minSize = 25;
  const maxSize = 500;
  const speed = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();

      size = size < maxSize ? size + speed : minSize;
      requestAnimationFrame(drawCircle);
    };

    drawCircle();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ backgroundColor: "blue" }}
    ></canvas>
  );
};

export default ExpandingCircleCanvas;
