import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

const trainerUrl = "http://localhost:9393/trainers/"

class Signup extends Component {
    state = {
        username: "",
        password: "",
        confirm: "",
        displayName: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    createAccount = e => {
        e.preventDefault()
        const obj = {
            name: this.state.displayName,
            username: this.state.username,
            password: this.state.password,
            wins: 0,
            losses: 0
        }
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        }
        const confirmPassword = () => {
            this.state.password === this.state.confirm ? 
            fetch(trainerUrl, config).then(r => r.json()).then(data => {
                this.props.login(data.trainer, [])
                this.props.history.push('/profile')
            }) :
            alert("The password you have entered does not match!")
        }
        fetch(trainerUrl).then(r => r.json()).then(data => {
            data.trainers.includes(this.state.username) ? alert("There is already a trainer with that username!") : confirmPassword()
        })
    }

    render() {
        return (
            <div className="form-container">
                <div className="signup">
                    <form onSubmit={e => this.createAccount(e)}>
                        <label>Username:</label>
                        <input onChange={e => this.handleChange(e)} type="text" name="username" value={this.state.username} placeholder="Enter a username..." required/>
                        <label>Display Name:</label>
                        <input onChange={e => this.handleChange(e)} type="text" name="displayName" value={this.state.displayName} placeholder="Enter a display name..." required/>
                        <label>Password:</label>
                        <input onChange={e => this.handleChange(e)} type="password" name="password" value={this.state.password} placeholder="Enter a password..." required/>
                        <label>Confirm Password:</label>
                        <input onChange={e => this.handleChange(e)} type="password" name="confirm" value={this.state.confirm} placeholder="Confirm your password..." required/>
                        <button type="submit" />
                    </form>
                </div>
                <div className="me">
                    <p>Can you defeat this Pokémon master?</p>
                    <img src={require("../images/Pokemon Master.png").default} alt="me"/>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup)