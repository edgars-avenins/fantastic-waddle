export default function sketch(p){
    let canvas;
    let width = window.innerWidth
    let height = window.innerHeight
    let angle = 0
    let button
    let pause = false

    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.angleMode(p.DEGREES)
      p.rectMode(p.CENTER)
      p.frameRate(30)
      pauseButton()
      
    }
    
    
    
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
      p.background(0)
      p.draw = () => {
        p.clear()
        //understand reacts role in this
        p.background(204);
        
        p.translate(width / 2, height / 2)
        p.circle(0,0,100)

        p.rotate(angle)
        p.circle(200, 0, 50)
        
        p.translate(200, 0)
        
        p.rotate(angle * 2)
        p.circle(50, 0, 25)

        p.translate(50, 0)
        
        p.rotate(angle * 5)
        p.circle(20, 0, 5)


        angle +=1
      }
    }

    function pauseButton(){
      button = p.createButton('PAUSE')
      button.position(20,20)
      button.mousePressed(() => {
        pause = !pause
        if(pause){
          p.noLoop()
        }else{
          p.loop()
        }
      })
    }
}
//get a constructor going and create planets in this way
class Planets{
  constructor(){

  }
}