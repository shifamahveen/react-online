import './App.css';
import Timer from "./components/Timer";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true
    }
  };

  removeTimer = () => {
    this.setState({ showTimer: false });
  };

  render() {
    return (
      <>
        {this.state.showTimer ? <Timer /> : <p> Timer Component Unmounted </p> }
        <br />
        <button onClick={this.removeTimer}>Remove Timer Component</button>
      </>
    )
  }
}

export default App;