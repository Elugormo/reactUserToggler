import React, { useRef, useEffect} from 'react';
import classes from './Cockpit.css'
const Cockpit = (props) => {
    const bntToggle = useRef();

    useEffect(() => {
      bntToggle.current.click();
    }, [])

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} ref={bntToggle}  onClick={props.clicked}>Toggle Users</button>
        </div>
    );
}

export default Cockpit