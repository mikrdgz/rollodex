import React, {Component} from 'react';
import './App.css';


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    contacts: [],
    isClicked: false

  };
}

componentDidMount(){
  this.fetchData();
}

fetchData = () => {
fetch('https://randomuser.me/api/?results=10')
.then( response => response.json())
.then(data => data.results.map(user => ({
  name: `${user.name.first}`,
  address:`${user.location.street}, ${user.location.city}`,
  email: `${user.email}`,
  picture: `${user.picture.large}`
}

)))
.then(contacts => this.setState({
  contacts
}))



.catch(error => console.log("parsing failed...", error))
}

buttonClick = ()=> {
  this.setState({isClicked: true})

  if (this.state.isClicked === true ){
    document.getElementById("people").appendChild(this.state.contacts)
}
}




  render(){

    // const{isLoading, contacts} = this.state;
  return (
      <div className="App">
        
          <header><h1>Mikaela's Rollodex</h1></header>
          {
              this.state.contacts.map(contact => {
             return <div id="people" key={contact.name}>
             <p key={contact.name}>{contact.name}<br/>{contact.address}<br/><img src={contact.picture}/><br/>{contact.email}</p>
             <button onClick={this.buttonClick}>See More</button>
              </div>
            
              })

            }
    </div>
    )
  }
}



export default App;

