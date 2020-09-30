import React, {Component} from 'react';
class Statut extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pop:false}
    }
    DoPopUp=()=>{
        this.setState({
            pop:!this.state.pop
            
        })
    }
    render() { 
        return ( <div> 
            <div  className={this.state.pop===true?"pop-up":"pop-down"} >
        <div> {this.props.person1.map(el=><div key={el.id} className="pop-up1">
        <img src={el.url} alt=""/>
        <h4> {el.name} </h4>
        <h5> {el.profession} </h5>
        <p> {el.bio} </p>
        
        </div>)} </div>
        
        </div>
        <button className="btn" onClick={()=>this.DoPopUp()}><b>{this.state.pop===false?"Show":"Hide"} profil</b></button>
        </div> );
    }
    
    
}
export default Statut;



