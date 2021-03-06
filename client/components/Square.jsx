import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'

class Square extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      color: 'green',
      size: 1,
      angle: 0,
      otherAngle: 0
    }
  }

  randomColor = () => {
    this.setState({
      color:[Math.random()*255, Math.random()*255, Math.random()*255]
    })
  }

  componentDidMount(){
    setInterval(() => {
      this.growSquare()
    }, 100)
  }

  growSquare = () => {
    // let newSize = this.state.size
    // newSize += 1
    // console.log(newSize)
    this.setState({
      size: this.state.size *= 1.05,
      angle: this.state.angle += 1,
      otherAngle: this.state.otherAngle += 10
    })
    if(this.state.angle % 5 === 0) this.randomColor()
  }
  //push them into an array and update accordingly
  render(){
      console.log(this)
    return (
       <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color} squareSideSize={this.state.size} angle={this.state.otherAngle}/>
      </div>
    )
  }
}

export default Square
