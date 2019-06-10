import React, {Component} from 'react';
import './App.css';


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    isLoading: true,
    contacts: []
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
  email: `${user.email}`
}

)))
.then(contacts => this.setState({
  contacts,
  isLoading: false
}))



.catch(error => console.log("parsing failed...", error))
}

  render(){
    // const{isLoading, contacts} = this.state;
  return (
      <div className="App">
        <div>   
       {
            !this.state.isLoading && this.state.contacts.length > 0 ? this.state.contacts.map(contact => {
             return <p key={contact.name}><br/>{contact.name}<br/>{contact.address}<br/>{contact.email}</p>
            }) : null

          }
        </div>
        </div>

  )}
        }
export default App;
