import React, { Component } from 'react';
import style from './Person.css'


const Person = (props) => {
    return (
        <div className="Person">
    <h1 onClick={props.click} >I'm {props.name} and I'm {props.age} years old </h1>
    <p >{props.children}</p>
    <input onChange={props.changed} value={props.name} type="text"/>
    </div>
    );
}
 
export default Person;