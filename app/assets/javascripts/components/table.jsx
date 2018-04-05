class Table extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: this.props.users
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <Users users={this.state.users} />
      </table>
    )
  };
}

class RenderCode extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: this.props.user.name
    }
  }
  render() {
    return <h1>This is new app with {this.state.user}</h1>
  }
}


class Caculator1 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      c1: this.props.c1
    }
  }
  render(){
    return (
      <div>
        <br></br>
        <button>{this.state.c1}</button>
        <button id = "2">{this.state.c1 + 1}</button>
        <button id = "3">{this.state.c1 + 2}</button>
        <button id = "+">+</button>
        <button id = "-">-</button>
        <br></br>
        <button id = "4">{this.state.c1 + 3}</button>
        <button id = "5">{this.state.c1 + 4}</button>
        <button id = "6">{this.state.c1 + 5}</button>
        <button id = "x">x</button>
        <button id = ":">:</button>
        <br></br>
        <button id = "7">{this.state.c1 + 6}</button>
        <button id = "8">{this.state.c1 + 7}</button>
        <button id = "9">{this.state.c1 + 8}</button>
        <button id = "0">{this.state.c1 - 1}</button>
      </div>
    )
  }
}


class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
