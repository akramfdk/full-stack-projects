import {robots} from './robots.jsx';
import CardList from './CardList.jsx';
import SearchBox from './SearchBox.jsx';

import { Component } from 'react';



class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                {/* <CardList robots={this.state.robots} /> */}
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;