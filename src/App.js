import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Max', age: '16'},
      {id:'2', name: 'Stephanie', age: '21'},
      {id:'3', name: 'John', age: '17'}
    ],
    someText: 'valuable text',
    showToggler: false
  }



  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    person[personIndex] = person;

    this.setState({
      persons
    })

    this.setState({
      persons: [
        {name: 'Maximilian', age: '16'},
        {name: event.target.value, age: '21'},
        {name: 'John', age: '20'}
      ]
    })



  }
  toggleUserHandler = (e) => {
    const doesShow = this.state.showToggler;

    this.setState({
      showToggler: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })

  }
  render() { 
    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showToggler) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangeHandler(event, person.id)}
          />
        })}
        
      </div>)
    }

    return ( 
      <div className="App">
        <h2>Some nice-looking text here!</h2>
        <button style={style} onClick={this.toggleUserHandler}>Toggle Users</button>
    
       <div>
        {persons} 
        </div>
        </div>
     );
  }
}
 
export default App;
