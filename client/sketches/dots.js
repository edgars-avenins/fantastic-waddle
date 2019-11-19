export default function sketch(p){
    let canvas;
    let width = window.innerWidth
    let height = window.innerHeight
    let angle = 0
    let button
    let slider 
    let multi
    let pause = false

    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.angleMode(p.DEGREES)
      p.rectMode(p.CENTER)
      p.frameRate(30)
      pauseButton()

      slider = p.createSlider(1,1.05,1,0.0001)
      slider.position(100,20)
      slider.style('width', '80px')
      
    }
    
    
    
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
      p.background(0)
      p.draw = () => {
        p.clear()
        multi = slider.value()
        //understand reacts role in this

        p.push()
        let mercury = new Circle(80,80,8, width/2,height/2)
        mercury.display(angle * 4)
        p.pop()

        p.push()
        let venus = new Circle(105,105,20, width/2,height/2)
        venus.display(angle * 1.5)
        p.pop()

        p.push()
        let earth = new Circle(130,130,20, width/2,height/2)
        earth.display(angle)
        p.pop()

        p.push()
        let mars = new Circle(150,150,11, width/2,height/2)
        mars.display(angle / 2)
        p.pop()

        p.push()
        let jupiter = new Circle(230,230,120, width/2,height/2)
        jupiter.display(angle / 12)
        p.pop()

        p.push()
        let saturn = new Circle(330,330,110, width/2,height/2)
        saturn.display(angle / 30)

        let ring = new Circle(0,0,120, 330,330)
        ring.display(angle / 30)

        p.pop()

        p.push()
        let uranus = new Circle(400,400,40, width/2,height/2)
        uranus.display(angle / 84)
        p.pop()

        p.push()
        let neptune = new Circle(460,460,40, width/2,height/2)
        neptune.display(angle / 165)
        p.pop()

        p.push()
        let pluto = new Circle(500,500,6, width/2,height/2)
        pluto.display(angle / 248)
        p.pop()
        
        p.translate(width / 2, height / 2)
        p.circle(0,0,180)


        angle = multi * angle + 0.1
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

    function Circle(x,y,r,xTrans,yTrans){
      this.x = x,
      this.y = y,
      this.r = r,
      this.xTrans = xTrans,
      this.yTrans = yTrans,

      this.display = function(angle){
        p.stroke(0)
        p.noFill()
        p.translate(this.xTrans, this.yTrans)
        p.rotate(angle)
        p.circle(this.x, this.y, this.r)
      }
    }
}