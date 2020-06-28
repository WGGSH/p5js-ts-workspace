import p5 from 'p5'

const sketch = (p: p5) => {
  p.preload = () => {
  }

  p.setup = () => {
    p.resizeCanvas(p.windowWidth,p.windowHeight)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth,p.windowHeight)
  }

  p.draw = () => {
  }
}

const sketchP = new p5(sketch)
