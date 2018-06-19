import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {remaining: this.props.seconds};
    }

    countDown() {
        if(this.state.remaining > 0) {
            this.setState((prevState) => ({
                remaining: prevState.remaining - 1
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.countDown(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>Hello, this is {this.props.name} app!</h1>
                <h2>{this.state.remaining} seconds remaining.</h2>
            </div>
        );
    }
}

const element = <Timer name="ReactTimer" seconds={180} />;

ReactDOM.render(
    element,
    document.getElementById('timer')
);