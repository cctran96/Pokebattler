import React, { Component } from 'react'

const img = "https://static.wixstatic.com/media/2e0667_94fcff8a7c1a42358312ec303dac07ab.gif"
const loginUrl = "http://localhost:9393/login"

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleLogin = e => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }
        fetch(loginUrl, config).then(r => r.json()).then(data => {data.message ? alert(data.message) : this.props.login(data.trainer, data.teams)})
    }

    render() {
        return (
            <div className={this.props.display ? "login-form active" : "login-form"}>
                <form onSubmit={e => this.handleLogin(e)}>
                    <fieldset id="inputs">
                        <input onChange={e => this.handleChange(e)} type="text" name="username" value={this.state.username} placeholder="Enter your username..." required/>
                        <input onChange={e => this.handleChange(e)} type="password" name="password" value={this.state.password} placeholder="Enter your password..." required/>
                    </fieldset>
                    <fieldset id="actions">
                        <button type="submit" className="submit"><img src={img} alt="pokeball"/></button>
                        <label><input type="checkbox"/>Remember me</label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LoginForm