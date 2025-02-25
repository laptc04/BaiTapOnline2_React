import { useEffect, useRef } from "react";

const GradientBarCanvas = () => {
  const canvasRef = useRef(null);
  let width = 0;
  const maxWidth = 800;
  const speed = 2;

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let color1 = "red";
    let color2 = "white";

    const drawBar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(200, 0, 200 + width, 0);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.save();
      ctx.translate(200, 100);
      ctx.transform(1, 0, -Math.tan(Math.PI / 3), 1, 0, 0);
      ctx.fillRect(0, 0, width, 120);
      ctx.restore();

      if (width < maxWidth) {
        width += speed;
      } else {
        width = 0;
        color1 = getRandomColor();
        color2 = getRandomColor();
      }
      requestAnimationFrame(drawBar);
    };

    drawBar();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ backgroundColor: "black", display: "block" }}
    ></canvas>
  );
};

export default GradientBarCanvas;
