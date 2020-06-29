import p5 from "p5";

const sketch = (p: p5) => {
  p.preload = () => {
    console.log("call:preload");
  };

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255, 0, 0, 0);
  };
};

new p5(sketch);
