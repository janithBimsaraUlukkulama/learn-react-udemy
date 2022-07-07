import React from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault(); // prevent default form on submit
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">Username</label>
                <input id="userName" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>)
};

export default AddUser;