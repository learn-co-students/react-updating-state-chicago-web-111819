import React, {Component} from 'react';
import ButtonCounter from './ButtonCounter';
import LightSwitch from './LightSwitch';
 
class ClickityClick extends Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = { hasBeenClicked: false };
  }
 
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log("inside 'setState()':", this.state.hasBeenClicked)); /* prints true */
    console.log("outside 'setState()':", this.state.hasBeenClicked); /* prints false */
  };
 
  render() {
    return (
      <div id="wrapper">
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <button onClick={this.handleClick}>Clickity me <span role="img" aria-label="Laughing face">😂</span>!</button>
        </div>
        <hr />
        <div>
          <ButtonCounter />
        </div>
        <hr />
        <div>
          <LightSwitch />
        </div>
      </div>
    );
  }
}
 
export default ClickityClick;


