import React, { Component } from 'react';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
    };
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await data.json();
    this.setState({ users: response });
  }

  componentDidUpdate() {
    console.log('did update');
    console.log(this.state.users);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </button>
        {this.state.users.map((user) => {
          return (
            <>
              {user.name}
              <br />
            </>
          );
        })}
      </div>
    );
  }
}
