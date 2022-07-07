import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); // prevent default form on submit

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);

        setEnteredUserName('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title="test"/>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">Username</label>
                    <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;