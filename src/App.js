import React, {Component} from 'react';
import './App.css';
import Statut from './component/profil';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      time:"" ,
      person1:[{ id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRtpvw49Ymt_JxPZfhByYVHEEMyIT-VzGx6Q&usqp=CAU",
      name:"Lucie Karemyr",
      bio:"Book Lover, Traveller,  Love all animals,  Mediator",
      profession:"Motivational Speaker" }]    
    }
  }
  componentDidMount(){
    setInterval (()=>{
    this.setState ({time:new Date().toString().slice(15,25)})
    },1000)
  }
  render() { 
    return ( <div>
    <h5 className="time">{this.state.time}</h5>
    <Statut person1={this.state.person1}  DoPopUp={this.DoPopUp} /> 
    </div>
    );
  }
}
export default App;


