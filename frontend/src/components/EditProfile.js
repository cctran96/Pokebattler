import React, {Component} from 'react'

class EditProfile extends Component {
    state = {
        name: this.props.currentUser.name,
        sprite: this.props.currentUser.sprite,
        bio: this.props.currentUser.bio
    }

    saveProfile = () => {

    }

    handleInputs = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    changeSprite = e => {
        this.setState({sprite: e.target.value})
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
                        <img className="profile-img" src={this.state.sprite} alt="trainer"/>
                        <textarea value={this.state.bio} name="bio" onChange={e => this.handleInputs(e)}/>
                    </form>
                    <button onClick={this.saveProfile}>Save Profile</button>
                </div>
                <div className="sprite-container">
                    {string.split("/").map(name => name.split(" ").join("_")).map(trainer => <img src={require(`../images/Spr_B2W2_${trainer}.png`)} />)}
                </div>
            </>
                
        )
    }
}

export default EditProfile

// require(`../hog-imgs/${this.props.hog.name.toLowerCase().replaceAll(' ', '_')}.jpg`)

// const sprites = {
//     aceF: "https://archives.bulbagarden.net/media/upload/0/08/Spr_B2W2_Ace_Trainer_F.png",
//     aceM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Ace_Trainer_M.png",
//     alder: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Alder.png",
//     artist: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Artist.png",
//     backersF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Backers_F.png",
//     backersM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Backers_M.png",
//     backpackerF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Backpacker_F.png",
//     backpackerM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Backpacker_M.png",
//     baker: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Baker.png",
//     battleGirl: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Battle_Girl.png",
//     beauty: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Beauty.png",
//     benga: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Benga.png",
//     bianca: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Bianca.png",
//     biker: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Biker.png",
//     blackBelt: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Black_Belt.png",
//     blaine: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Blaine.png",
//     blue: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Blue.png",
//     brawly: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Brawly.png",
//     brock: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Brock.png",
//     brycen: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Brycen.png",
//     bugsy: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Bugsy.png",
//     burgh: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Burgh.png",
//     byron: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Byron.png",
//     caitlin: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Caitlin.png",
//     candice: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Candice.png",
//     cheren: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cheren.png",
//     chili: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Chili.png",
//     chuck: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Chuck.png",
//     cilan: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cilan.png",
//     clair: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Clair.png",
//     clay: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Clay.png",
//     clerkF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Clerk_F.png",
//     clerkM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Clerk_M_B.png",
//     clerkM2: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Clerk_M.png",
//     colress: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Colress.png",
//     crasher: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Crasher_Wake.png",
//     cress: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cress.png",
//     cyclistF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cyclist_F.png",
//     cyclistM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cyclist_M.png",
//     cynthia: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Cynthia.png",
//     dancer: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Dancer.png",
//     depot: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Depot_Agent.png",
//     doctor: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Doctor.png",
//     drayden: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Drayden.png",
//     elesa: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Elesa.png",
//     emmet: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Emmet.png",
//     erika: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Erika.png",
//     falkner: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Falkner.png",
//     fantina: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Fantina.png",
//     fisher: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Fisherman.png",
//     flannery: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Flannery.png",
//     gardenia: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Gardenia.png",
//     gentleman: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Gentleman.png",
//     ghetsis: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Ghetsis.png",
//     giovani: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Giovanni.png",
//     grim: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Grimsley.png",
//     guitar: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Guitarist.png",
//     harlequin: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Harlequin.png",
//     hiker: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hiker.png",
//     hilbert: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hilbert_2.png",
//     hilbert2: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hilbert.png",
//     hilda: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hilda_2.png",
//     hilda2: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hilda.png",
//     hool: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hooligans.png",
//     hoop: "https://archives.bulbagarden.net/media/upload/a/a6/Spr_B2W2_Hoopster.png",
//     hugh: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Hugh.png",
//     infield: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Infielder.png",
//     ingo: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Ingo.png",
//     iris: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Iris.png",
//     janine: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Janine.png",
//     janitor: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Janitor.png",
//     jasmine: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Jasmine.png",
//     juan: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Juan.png",
//     lady: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Lady.png",
//     lance: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Lance.png",
//     lass: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Lass.png",
//     lenora: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Lenora.png",
//     line: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Linebacker.png",
//     liza: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Liza.png",
//     surge: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Lt_Surge.png",
//     maid: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Maid.png",
//     marlon: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Marlon.png",
//     marshal: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Marshal.png",
//     maylene: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Maylene.png",
//     misty: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Misty.png",
//     morty: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Morty.png",
//     musician: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Musician.png",
//     n: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_N.png",
//     nate: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Nate_2.png",
//     nate2: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Nate.png",
//     norman: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Norman.png",
//     nurse: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Nurse.png",
//     nursery: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Nursery_Aide.png",
//     parasol: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Parasol_Lady.png",
//     pilot: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pilot.png",
//     plasmaF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Plasma_Grunt_F.png",
//     plasmaM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Plasma_Grunt_M.png",
//     pokefanF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9fan_F.png",
//     pokefanM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9fan_M.png",
//     breedF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9mon_Breeder_F.png",
//     breedM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9mon_Breeder_M.png",
//     rangeF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9mon_Ranger_F.png",
//     rangeM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pok%C3%A9mon_Ranger_M.png",
//     police: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Policeman.png",
//     preF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Preschooler_F.png",
//     preM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Preschooler_M.png",
//     pryce: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Pryce.png",
//     psychicF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Psychic_F.png",
//     psychicM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Psychic_M.png",
//     red: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Red.png",
//     rich: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Rich_Boy.png",
//     roark: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Roark.png",
//     rood: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Rood.png",
//     rosa2: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Rosa_2.png",
//     rosa: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Rosa.png",
//     rough: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Roughneck.png",
//     rox: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Roxanne.png",
//     roxie: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Roxie.png",
//     sabrina: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Sabrina.png",
//     kidF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_School_Kid_F.png",
//     kidM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_School_Kid_M.png",
//     scientistF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Scientist_F.png",
//     scientistM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Scientist_M.png",
//     shadow: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Shadow_Triad.png",
//     shauntal: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Shauntal.png",
//     skyla: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Skyla.png",
//     smash: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Smasher.png",
//     socialite: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Socialite.png",
//     steven: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Steven.png",
//     striker: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Striker.png",
//     swimF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Swimmer_F.png",
//     swimM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Swimmer_M.png",
//     tate: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Tate.png",
//     twins: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Twins.png",
//     veteranF: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Veteran_F.png",
//     veteranM: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Veteran_M.png",
//     volkner: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Volkner.png",
//     waiter: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Waiter.png",
//     waitress: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Waitress.png",
//     wallace: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Wallace.png",
//     wattson: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Wattson.png",
//     whitney: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Whitney.png",
//     winona: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Winona.png",
//     worker: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Worker.png",
//     ice: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_WorkerIce.png",
//     young: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Youngster.png",
//     zinzolin: "https://archives.bulbagarden.net/wiki/File:Spr_B2W2_Zinzolin.png"
// }

const string = "Ace Trainer F/Ace Trainer M/Alder/Artist/Backers F/Backers M/Backpacker F/Backpacker M/Baker/Battle Girl/Beauty/Benga/Bianca/Biker/Black Belt/Blaine/Blue/Brawly/Brock/Brycen/Bugsy/Burgh/Byron/Caitlin/Candice/Cheren/Chili/Chuck/Cilan/Clair/Clay/Clerk F/Clerk M/Clerk M B/Colress/Crasher Wake/Cress/Cyclist F/Cyclist M/Cynthia/Dancer/Depot Agent/Doctor/Drayden/Elesa/Emmet/Erika/Falkner/Fantina/Fisherman/Flannery/Gardenia/Gentleman/Ghetsis/Giovanni/Grimsley/Guitarist/Harlequin/Hiker/Hilbert 2/Hilbert/Hilda 2/Hilda/Hooligans/Hoopster/Hugh/Infielder/Ingo/Iris/Janine/Janitor/Jasmine/Juan/Lady/Lance/Lass/Lenora/Linebacker/Liza/Lt Surge/Maid/Marlon/Marshal/Maylene/Misty/Morty/Musician/N/Nate 2/Nate/Norman/Nurse/Nursery Aide/Parasol Lady/Pilot/Plasma Grunt F/Plasma Grunt M/Pokéfan F/Pokéfan M/Pokémon Breeder F/Pokémon Breeder M/Pokémon Ranger F/Pokémon Ranger M/Policeman/Preschooler M/Preschooler F/Pryce/Psychic F/Psychic M/Red/Rich Boy/Roark/Rood/Rosa 2/Rosa/Roughneck/Roxanne/Roxie/Sabrina/School Kid F/School Kid M/Scientist F/Scientist M/Shadow Triad/Shauntal/Skyla/Smasher/Socialite/Steven/Striker/Swimmer F/Swimmer M/Tate/Twins/Veteran F/Veteran M/Volkner/Waiter/Waitress/Wallace/Wattson/Whitney/Winona/Worker/WorkerIce/Youngster/Zinzolin"