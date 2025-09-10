import { Component } from 'react';
import './App.css';

import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/Scroll.jsx'

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

        const {robots, searchfield} = this.state;

        if (!robots.length){
            return (
                <h1 className="tc">Loading</h1>
            )
        }
        else{
            const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            })

            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
