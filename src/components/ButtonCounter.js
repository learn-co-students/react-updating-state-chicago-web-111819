import React, {Component} from 'react';
 
class ButtonCounter extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      count: 0
    }
  }
 
  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
 
  render() {
    return (
      <div>
        <span>Button clicked <span style={{fontSize: "1.2em", fontWeight: "bold"}}>{this.state.count}</span> time{this.state.count === 1 ? null : "s"}</span>
        &nbsp;&nbsp;
        <button onClick={this.handleClick}>Click to count up</button>
      </div>
    )
  }
}
 
export default ButtonCounter


