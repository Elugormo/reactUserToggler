import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';


class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Max', age: 16},
      {id:'2', name: 'Stephanie', age: 21},
      {id:'3', name: 'John', age: 17}
    ],
    someText: 'valuable text',
    showPersons: false
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
        {name: 'Maximilian', age: 16},
        {name: event.target.value, age: 21},
        {name: 'John', age: 20}
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
   

    let persons = null;




    if (this.state.showToggler) {
      persons = 
        <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler} />
    }




    return ( 
      <Auxiliary>
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked ={this.toggleUserHandler}
        title = {this.props.title}
        />
        {persons} 
        </Auxiliary>
     );
  }
}
 
export default withClass(App, classes.App);
