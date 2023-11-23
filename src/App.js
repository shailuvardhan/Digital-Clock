import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggleButton = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state
    const displayName = showClock ? 'Hide Clock' : 'Show Clock'

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleButton}
        >
          {displayName}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
