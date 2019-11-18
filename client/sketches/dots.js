export default function sketch(p){
    let canvas;
    let width = window.innerWidth
    let height = window.innerHeight


    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.angleMode(p.DEGREES)
      p.stroke('black');
    }
    
    p.draw = () => {
      p.background('orangered');
      p.rotate(45)
      p.rect(width / 2, height / 2, 25, 25);
    }
    
    
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
      p.background('red')
      p.draw = () => {
        p.fill('green')
//understand reacts role in this
        p.translate(p.mouseX, p.mouseY)
        p.rect(100, 100, 100, 100)
      }
    }
}