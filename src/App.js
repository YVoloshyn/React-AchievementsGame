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

class App extends Component {
    render() {
        return (
            <div className="App">
                <AchievementsDisplay id={2}/>
                {Achievements.map((place, id) => (
                    <button
                        key={id}
                        onClick={() => {
                            console.log('Clicked index '+id);
                        }}
                    >
                        {place.name}
                    </button>
                ))}
            </div>
        );
    }
}

export default App;