import React, { Component } from "react";
import "./App.css";

const Achievements = [
    { name: "Bomb Magnet", id: "1" },
    { name: "Perfectionist", id: "2" },
    { name: "Night Shift", id: "3" },
    { name: "Connected Ninja", id: "4" }
];

class AchievementsDisplay extends Component{
    render() {
        return (
            <h2>Displaying Achievement description for id {this.props.id}!</h2>
        )
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
                    <AchievementsDisplay
                        key={activeAchievement}
                        id={Achievements[activeAchievement].id}
                    />
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
                </div>
            );
        }else {
            return (
                <div className="NotSelected">
                    <AchievementNotSelected />
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
                </div>
            );
        }
    }
}

export default App;