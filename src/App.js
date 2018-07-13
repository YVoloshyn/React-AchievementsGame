import React, { Component } from "react";
import "./App.css";

class AchievementsDisplay extends Component{
    render() {
        return (
            <h2>Here will be the text about selected Achievement!</h2>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <AchievementsDisplay />
            </div>
        );
    }
}

export default App;