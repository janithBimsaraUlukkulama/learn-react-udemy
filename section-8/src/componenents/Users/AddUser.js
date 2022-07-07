import React from 'react';

const AddUser = props => {
    const addUserHandler = (event)=>{
        event.preventDefault(); // prevent default form on submit
    }

    return <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text"/>
        <label htmlFor="age">Username</label>
        <input id="age" type="number"/>
        <button type="submit">Add User</button>
    </form>
};

export default AddUser;