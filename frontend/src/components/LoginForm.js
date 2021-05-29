import React from 'react'

const img = "https://static.wixstatic.com/media/2e0667_94fcff8a7c1a42358312ec303dac07ab.gif"

class LoginForm extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div className={this.props.display ? "login-form active" : "login-form"}>
                <form>
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