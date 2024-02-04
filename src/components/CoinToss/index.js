// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossBtn = () => {
    const result = Math.floor(Math.random() * 2)

    if (result === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossUrl: headsUrl,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossUrl: tailsUrl,
      }))
    }
  }

  render() {
    const {heads, tails, tossUrl} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="game-details">Heads (or) Tails</p>

          <img src={tossUrl} alt="toss result" className="images" />

          <button type="button" className="btn" onClick={this.onClickTossBtn}>
            Toss Coin
          </button>

          <div className="count-container">
            <p className="total">Total: {heads + tails}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
