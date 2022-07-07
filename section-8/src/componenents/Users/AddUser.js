import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); // prevent default form on submit
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">Username</label>
                <input id="userName" type="text" onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>)
};

export default AddUser;