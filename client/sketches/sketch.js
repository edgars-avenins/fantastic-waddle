export default function sketch(p){
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(300, 200);
      p.noStroke();
    }

    p.draw = () => {
      p.background('orangered');
      p.circle(100, 100, 50);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }
}