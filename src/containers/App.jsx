
import { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll.jsx";
import SearchBox from '../components/SearchBox.jsx'
import './App.css'



class  App extends Component  {

  constructor(){
    super()
    this.state ={
          robots: [],
          searchfield: ''
    }

  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
   return response.json()
  }).then(users=>{ 
    this.setState({robots:users})
    
  })
}


onSearchChange = (event) =>{
  this.setState({searchfield: event.target.value})

  console.log(event.target.value)
}

render()  {

    const filterRobots = this.state.robots.filter(robot =>{
    return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
  })
  return !this.state.robots.length ?
     (<div className="tc   center ">
      <h1 className="f1">Loading</h1>
    </div>) :
    
  
 (
    <div className="tc   center ">

        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange ={this.onSearchChange}/>

        <Scroll>
           <CardList robots = {filterRobots}/>
        </Scroll>
       
    </div>
   
  );
  
   
}



}

export default App;