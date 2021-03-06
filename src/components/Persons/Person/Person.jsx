import React, { Component } from 'react';
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';


class Person extends Component {
    constructor(props) {
        super(props) 
        this.inputElementRef = React.createRef();   
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() { 
        return (  
            <Auxiliary>
            <h1 onClick={this.props.click} >I'm {this.props.name} and I'm {this.props.age} years old </h1>
            <p>{this.props.children}</p>
            <input 
            onChange={this.props.changed} 
            value={this.props.name} 
            ref={this.inputElementRef}
            type="text"/>
            </Auxiliary>
        );
    }
}
 
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);