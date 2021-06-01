import React, {Component} from 'react'

const trainerUrl = "http://localhost:9393/trainers/"

class EditProfile extends Component {
    state = {
        name: this.props.currentUser.name,
        sprite: this.props.currentUser.sprite,
        bio: this.props.currentUser.bio
    }

    saveProfile = () => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(trainerUrl + this.props.currentUser.id, config).then(r => r.json()).then(data => {
            this.props.updateTrainer(data.trainer)
            this.props.editProfile()
        })
    }

    handleInputs = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    changeSprite = e => {
        this.setState({sprite: e.target.parentNode.id})
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    render() {
        const {currentUser} = this.props
        return (
            <>
                <div className="trainer-info">
                    <form className="edit-profile">
                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleInputs(e)}/>
                        <h3>Wins: {currentUser.wins}</h3>
                        <h3>Losses: {currentUser.losses}</h3>
                        <img className="profile-img" src={require(`../images/Spr_B2W2_${this.state.sprite.split(" ").join("_")}.png`).default} alt="trainer"/>
                        <textarea value={this.state.bio} name="bio" onChange={e => this.handleInputs(e)}/>
                    </form>
                    <button onClick={this.saveProfile}>Save Profile</button>
                </div>
                <div className="sprite-container">
                    {string.split("/").map(trainer => {
                        return (
                            <div id={trainer} key={trainer} className="sprite">
                                <h4>{trainer}</h4>
                                <img src={require(`../images/Spr_B2W2_${trainer.split(" ").join("_")}.png`).default} alt={trainer}/>
                                <button onClick={e => this.changeSprite(e)}>Change</button>
                            </div>
                        )
                    })}
                </div>
            </>
                
        )
    }
}

export default EditProfile

const string = "Ace Trainer F/Ace Trainer M/Alder/Artist/Backers F/Backers M/Backpacker F/Backpacker M/Baker/Battle Girl/Beauty/Benga/Bianca/Biker/Black Belt/Blaine/Blue/Brawly/Brock/Brycen/Bugsy/Burgh/Byron/Caitlin/Candice/Cheren/Chili/Chuck/Cilan/Clair/Clay/Clerk F/Clerk M/Clerk M B/Colress/Crasher Wake/Cress/Cyclist F/Cyclist M/Cynthia/Dancer/Depot Agent/Doctor/Drayden/Elesa/Emmet/Erika/Falkner/Fantina/Fisherman/Flannery/Gardenia/Gentleman/Ghetsis/Giovanni/Grimsley/Guitarist/Harlequin/Hiker/Hilbert 2/Hilbert/Hilda 2/Hilda/Hooligans/Hoopster/Hugh/Infielder/Ingo/Iris/Janine/Janitor/Jasmine/Juan/Lady/Lance/Lass/Lenora/Linebacker/Liza/Lt Surge/Maid/Marlon/Marshal/Maylene/Misty/Morty/Musician/N/Nate 2/Nate/Norman/Nurse/Nursery Aide/Parasol Lady/Pilot/Plasma Grunt F/Plasma Grunt M/Pokéfan F/Pokéfan M/Pokémon Breeder F/Pokémon Breeder M/Pokémon Ranger F/Pokémon Ranger M/Policeman/Preschooler M/Preschooler F/Pryce/Psychic F/Psychic M/Red/Rich Boy/Roark/Rood/Rosa 2/Rosa/Roughneck/Roxanne/Roxie/Sabrina/School Kid F/School Kid M/Scientist F/Scientist M/Shadow Triad/Shauntal/Skyla/Smasher/Socialite/Steven/Striker/Swimmer F/Swimmer M/Tate/Twins/Veteran F/Veteran M/Volkner/Waiter/Waitress/Wallace/Wattson/Whitney/Winona/Worker/WorkerIce/Youngster/Zinzolin"