import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.state.password !== '' && this.state.username !== '' ?this.props.handleLogin(this.state) : console.log('Please submit a complete form')
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.onSubmit}  >
        <div>
          <label>
            Username
            <input onChange={this.onChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
