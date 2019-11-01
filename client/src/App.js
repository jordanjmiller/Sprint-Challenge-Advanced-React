import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import HookComponent from './components/HookComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerArray: [],
    }
    // console.log('Constructor is running!');
  }
  
  componentDidMount() {
    console.log('CDM is running!');
    // fetch initial data
    // set up event listeners / subscriptions

    // window.addEventListener('resize', this.handleResize);
    // this.setState({ pokemon: data }); // pretend this is fetching from an API
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({...this.state, playerArray: response.data});
    })
    .catch(error => {console.log('Error! : ' + error)});
  }
   

  componentDidUpdate() {
    // console.log('CDU running');
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }

  render() {
    // console.log('Render');
    
    return (
      <div className="App">
        <h1>Women's World Cup players ranked by search</h1>
        <br/><br/>
        <div className='parent'>
          {this.state.playerArray && this.state.playerArray.map((player, index) => {
            return <PlayerCard {...player} key={index}/>
          })}
        </div>
        <HookComponent />
      </div>
    );
  }
}

export default App;
