import React, {Component} from 'react';
 
class LightSwitch extends Component {
  constructor() {
    super();
    // Initial state is defined
    this.state = { toggled: false };
  }
 
  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }
 
  render() {
    return (
      <div>
        <span>The light is now: </span><button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default LightSwitch;


