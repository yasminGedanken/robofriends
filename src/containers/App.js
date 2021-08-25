
import './App.css';
import React ,{Component} from 'react';
import {robots} from '../robots';
import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';



class App extends Component{

constructor(){
  super()
  this.state={
    robots: robots,
    searchfield:""
  }
}

componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users=> this.setState({robots:users}));
}

onSearchChenge = (event) =>{
  this.setState({searchfield: event.target.value})
}
  render(){
    const filter1 = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
return(
  <div className="tc">
    <h1 className='f1 '>RoboFreinds</h1>
    <SearchBox searchChenge={this.onSearchChenge}/>
    <Scroll>
    <RobotList robots ={filter1}/>
    </Scroll>
  </div>
);}
  }

}

export default App;
