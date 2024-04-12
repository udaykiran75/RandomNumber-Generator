import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onClickBtn = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({random: randomNumber}))
  }

  render() {
    const {random} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.onClickBtn}>Generate</button>
          <p className="number">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
