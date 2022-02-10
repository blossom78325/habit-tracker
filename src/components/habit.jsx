import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handelIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handelDecrement = () => {
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count });
    };

    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handelIncrement}
                >
                    <i className="fas fa-plus-square" />
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handelDecrement}
                >
                    <i className="fas fa-minus-square" />
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash" />
                </button>
            </li>
        );
    }
}

export default Habit;
