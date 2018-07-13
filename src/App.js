import React, { Component } from "react";
import "./App.css";

const Achievements = [
    { name: "Bomb Magnet", id: "1" },
    { name: "Perfectionist", id: "2" },
    { name: "Night Shift", id: "3" },
    { name: "Connected Ninja", id: "4" }
];

//let idNum = 0;

class AchievementsDisplay extends Component{
    constructor() {
        super();
        this.state = {
            AchievementData: null,
            Name: null,
            ID: null
        };
    }
    componentDidMount() {
        const achiArray = [
            {id:1, name:"Bomb Magnet",     text:"Hit thee bombs and scored over 250 after all bonuses in Arcade Mode."},
            {id:2, name:"Perfectionist",   text:"Retried a game three times in a row."},
            {id:3, name:"Night Shift",     text:"Complete 3 games between the hours of 2am and 5am."},
            {id:4, name:"Connected Ninja", text:"Posted a score on Facebook or Twitter."},
        ];
        const id = this.props.id;
        let JSON = null;
        for(let each in achiArray){
            if(achiArray[each].id == id){
                JSON = achiArray[each];
            }
        }
        //console.log(JSON);
        this.setState({ AchievementData: JSON.text, Name: JSON.name, ID: JSON.id })/*, function () {
            console.log(this.state);
        };*/
    }
    render() {
        const Text = this.state.AchievementData;
        const Name = this.state.Name;
        const ID = this.state.ID;
        if (ID == 1 || ID == null) {
            return (
                <div>
                    <h2>Want to have "{Name}"? Check what you need:</h2>
                    <img src={require('./magnetBomb.png')} alt="img"/>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 2 || ID == null) {
            return (
                <div>
                    <h2>Want to become a "{Name}"? Check what you need:</h2>
                    <img src={require('./perfectionist.png')} alt="img"/>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 3 || ID == null) {
            return (
                <div>
                    <h2>Want to get a "{Name}"? Check what you need:</h2>
                    <img src={require('./nightShift.png')} alt="img"/>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 4 || ID == null) {
            return (
                <div>
                    <h2>Want to get a "{Name}"? Check what you need:</h2>
                    <img src={require('./ninja.png')} alt="img"/>
                    <p>{Text}</p>
                </div>
            );
        }
    }
}


class AchievementNotSelected extends Component {
    render() {
        return (
            <h2>Please, select any Achievement to read more!</h2>
        )
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeAchievement: null,
        };
    }
    render() {
        const activeAchievement = this.state.activeAchievement;
        if (activeAchievement !== null) {
            return (
                <div className="App">
                    {Achievements.map((place, id) => (
                        <button
                            key={id}
                            onClick={() => {
                                this.setState({activeAchievement: id});
                            }}
                        >
                            {place.name}
                        </button>
                    ))}
                    <AchievementsDisplay
                        key={activeAchievement}
                        id={Achievements[activeAchievement].id}
                    />
                </div>
            );
        }else {
            return (
                <div className="NotSelected">
                    {Achievements.map((place, id) => (
                        <button
                            key={id}
                            onClick={() => {
                                this.setState({activeAchievement: id});
                            }}
                        >
                            {place.name}
                        </button>
                    ))}
                    <AchievementNotSelected />
                </div>
            );
        }
    }
}

export default App;