export default function sketch(p){
    let canvas;
    let width = window.innerWidth
    let height = window.innerHeight
    let angle = 0
    let button
    let slider 
    let multi
    let img
    let pause = false

    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.angleMode(p.DEGREES)
      p.rectMode(p.CENTER)
      p.frameRate(30)
      pauseButton()
      img = p.loadImage('https://images.unsplash.com/photo-1528746966523-1fc12935916e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')

      slider = p.createSlider(1,1.05,1,0.0001)
      slider.position(100,20)
      slider.style('width', '80px')
      

    }
    
    
    
    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
      p.background(0)
      p.draw = () => {
        p.clear()
        p.image(img,0,0,width,height)
      
        multi = slider.value()
        //understand reacts role in this
        //
        p.push()
        let mercury = new Circle(80,80,8, width/2,height/2,'#947676')
        mercury.display(angle * 4)
        p.pop()

        p.push()
        let venus = new Circle(105,105,20, width/2,height/2, '#d71a1a')
        venus.display(angle * 1.5)
        p.pop()

        p.push()
        let earth = new Circle(130,130,20, width/2,height/2, '#42aa72')
        earth.display(angle)
        p.pop()

        p.push()
        let mars = new Circle(150,150,11, width/2,height/2, '#a06a2e')
        mars.display(angle / 2)
        p.pop()

        p.push()
        let jupiter = new Circle(230,230,120, width/2,height/2, '#eace9c')
        jupiter.display(angle / 12)
        p.pop()

        p.push()
        let saturn = new Circle(330,330,110, width/2,height/2, '#f8e9d2')
        saturn.display(angle / 30)
        p.pop()

        p.push()
        let uranus = new Circle(400,400,40, width/2,height/2, '#cbf1f4')
        uranus.display(angle / 84)
        p.pop()

        p.push()
        let neptune = new Circle(460,460,40, width/2,height/2, '#3d56e6')
        neptune.display(angle / 165)
        p.pop()

        p.push()
        let pluto = new Circle(500,500,6, width/2,height/2, '#b4a29d')
        pluto.display(angle / 248)
        p.pop()
        
        p.translate(width / 2, height / 2)
        p.fill('#f67a21')
        p.circle(0,0,150)


        angle = multi * angle + 0.1
        
      }
    }

    function getSpins(angle){
      return p.floor(angle / 90)
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

    function Circle(x,y,r,xTrans,yTrans,color){
      this.x = x,
      this.y = y,
      this.r = r,
      this.xTrans = xTrans,
      this.yTrans = yTrans,
      this.color = color

      this.display = function(angle){
        p.stroke(92, 229, 247)
        p.strokeWeight(1)
        p.fill(this.color)
        p.translate(this.xTrans, this.yTrans)
        p.rotate(angle)
        p.circle(this.x, this.y, this.r)
      }
    }
}