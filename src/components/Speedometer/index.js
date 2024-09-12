// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    this.setState(prevSpeed => ({
      speed: prevSpeed.speed < 200 ? prevSpeed.speed + 10 : prevSpeed.speed,
    }))
  }

  brake = () => {
    this.setState(prevSpeed => ({
      speed: prevSpeed.speed > 0 ? prevSpeed.speed - 10 : prevSpeed.speed,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="speedometer">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading"> Speed is {speed}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button  className="accelerate-button" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button className="brake-button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
