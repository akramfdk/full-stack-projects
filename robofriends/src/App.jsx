import {robots} from './robots.jsx';
import CardList from './CardList.jsx';
import SearchBox from './SearchBox.jsx';

import { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({robots:users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {

        if (this.state.robots.length === 0){
            return (
                <h1>Loading</h1>
            )
        }
        else{
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })

            return (
                <div>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <CardList robots={this.state.robots} /> */}
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;
