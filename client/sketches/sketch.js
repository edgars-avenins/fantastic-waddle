export default function sketch(p){
    let canvas;
    let width = window.innerWidth
    let height = window.innerHeight


    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.angleMode(p.DEGREES)
      p.noStroke();
    }
    
    p.draw = () => {
      p.background('orangered');
      p.rotate(45)
      p.rect(width / 2, height / 2, 25, 25);
    }
    
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
      p.fill(newProps.color);
      p.draw = () => {
        p.background('orangered');
        p.translate(width / 2, height / 2)
        p.rotate(newProps.angle)
        p.rectMode(p.CENTER)
        p.rect(0,0, newProps.squareSideSize, newProps.squareSideSize)
        // if(true){
        //   console.log(p.second())
        // }
        }
    }
}