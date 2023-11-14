import React from 'react'
import './App.css';

class Person {
  constructor(fullName,bio,profession,imgSrc){
    this.fullName = fullName ;
    this.bio = bio ;
    this.profession = profession ;
    this.imgSrc = imgSrc ;
  }
}
class App extends React.Component {
  //intervalId = null ;
  state = {
    Person : new Person('NOT FOUND','NOT FOUND','NOT FOUND','NOT FOUND') ,
    show : false ,    
    count :0 ,
    intervalId : null ,
  };
  handleClick=()=>{
    if (this.state.show === true ) {
      this.setState( {Person : new Person('Krouma El-Hadj Idrissa ',
      '18 ans,Dans les domaines des TIC et apprenant à  Gomycode',
      'Etudiant',
      'https://gomycodelearndev.blob.core.windows.net/profiles/75d39dea-2a73-4c62-be71-2732efb24b1c-133333690764587011.jpg',
      ),
      count : 0 ,
      })
      //clearInterval(this.state.intervalId)
    }
    else{
      this.setState({Person : new Person('NOT FOUND','NOT FOUND','NOT FOUND','NOT FOUND'),
      })
      this.start()
    }
    this.state.show = !this.state.show
  };
  Affiche = () => {
    document.getElementById("temps").innerHTML = this.state.count + " secondes restantes";	
    this.setState({count : this.state.count + 1 })
  }
  start = () => {
    this.setState({intervalId : setInterval(this.Affiche, 1000)}) 
  }
  render() {
    return(
      <div className='App'>
        <h1>PROFILE</h1>
        <img src={this.state.Person.imgSrc} alt="NOT FOUND" />
        <h2>{this.state.Person.fullName}</h2>
        <p>{this.state.Person.profession} de {this.state.Person.bio}</p>
        <p id='temps'></p>
        <button onClick={this.handleClick}>Click here</button>
      </div >
    )
  }
}
export default App;
