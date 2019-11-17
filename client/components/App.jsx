import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      color: 'red'
    }
  }

  randomColor = () => {
    this.setState({
      color:[Math.random()*255, Math.random()*255, Math.random()*255]
    })
  }

  render(){
    return (
       <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}/>
      </div>
    )
  }
}

export default App
