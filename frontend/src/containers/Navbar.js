import React, {useState} from "react"
import LoginForm from '../components/LoginForm'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    const [display, setDisplay] = useState(false)

    const toggleLogin = e => {
        e.target.innerText === "LOG IN ▼" ? e.target.innerText = "Log in ▲" : e.target.innerText = "Log in ▼"
        setDisplay(!display)
    }

    return (
        <>
            <div className="navbar">
                <NavLink to='/' id='home' className='fill'>Home</NavLink>
                <NavLink to='/team' id='team' className='fill'>Build Your Team</NavLink>
                <NavLink to='/profile' id='profile' className='fill'>Trainer Info</NavLink>
                <NavLink to='/battle' id='battle' className='fill'>Pokémon Battle</NavLink>
                <a onClick={toggleLogin} id="login">Log in ▼</a>
            </div>
            <LoginForm display={display}/>
        </>
    )
}

export default Navbar