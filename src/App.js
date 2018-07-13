import React, { Component } from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";


import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

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
                <div align="center">
                    <img src={require('./magnetBomb.png')} alt="img"/>
                    <h2>Want to have "{Name}"? Check what you need:</h2>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 2 || ID == null) {
            return (
                <div align="center">
                    <img src={require('./perfectionist.png')} alt="img"/>
                    <h2>Want to become a "{Name}"? Check what you need:</h2>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 3 || ID == null) {
            return (
                <div align="center">
                    <img src={require('./nightShift.png')} alt="img"/>
                    <h2>Want to get a "{Name}"? Check what you need:</h2>
                    <p>{Text}</p>
                </div>
            );
        }else if (ID == 4 || ID == null) {
            return (
                <div align="center">
                    <img src={require('./ninja.png')} alt="img"/>
                    <h2>Want to get a "{Name}"? Check what you need:</h2>
                    <p>{Text}</p>
                </div>
            );
        }
    }
}


class AchievementNotSelected extends Component {
    render() {
        return (
            <div align="center">
            <h2>Please, select any Achievement to read more!</h2>
            </div>
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
                <div>
                    <div class="p-3 mb-2 bg-primary text-white">
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                Unicorn Game Achievements
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    </div>
                    <div id="MainBlock">
                    <Grid>
                        <Row>
                            <Col md={4} sm={4}>
                                <h3>Select Achievement</h3>
                                <Nav
                                    bsStyle="pills"
                                    stacked
                                    activeKey={activeAchievement}
                                    onSelect={id => {
                                        this.setState({ activeAchievement: id });
                                    }}
                                >
                                    {Achievements.map((names, id) => (
                                        <NavItem key={id} eventKey={id}>{names.name}</NavItem>
                                    ))}
                                </Nav>
                            </Col>
                            <Col md={8} sm={8}>
                                <AchievementsDisplay
                                    key={activeAchievement}
                                    id={Achievements[activeAchievement].id}
                                />
                            </Col>
                        </Row>
                    </Grid>
                    </div>
                </div>
            );
        }else {
            return (
                <div>
                    <div class="p-3 mb-2 bg-primary text-white">
                    <Navbar >
                        <Navbar.Header>
                            <Navbar.Brand>
                                Unicorn Game Achievements
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    </div>
                    <div id="MainBlock">
                    <Grid>
                        <Row>
                            <Col md={4} sm={4}>
                                <h3>Select Achievement</h3>
                                <Nav
                                    bsStyle="pills"
                                    stacked
                                    activeKey={activeAchievement}
                                    onSelect={id => {
                                        this.setState({ activeAchievement: id });
                                    }}
                                >
                                    {Achievements.map((name, id) => (
                                        <NavItem key={id} eventKey={id}>{name.name}</NavItem>
                                    ))}
                                </Nav>
                            </Col>
                            <Col md={8} sm={8}>
                                <AchievementNotSelected />
                            </Col>
                        </Row>
                    </Grid>
                    </div>
                </div>
            );
        }
    }
}


export default App;