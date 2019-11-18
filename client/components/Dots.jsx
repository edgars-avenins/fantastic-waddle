import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/dots'

class Dots extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
       <div>
        <P5Wrapper sketch={sketch}/>
      </div>
    )
  }
}

export default Dots
