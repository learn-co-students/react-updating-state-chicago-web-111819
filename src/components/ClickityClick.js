import React, {Component} from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super()

        this.state = {
            toggled: false
        }
    }

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
                <p>{this.state.toggled ? "ON" : 'OFF'}</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}