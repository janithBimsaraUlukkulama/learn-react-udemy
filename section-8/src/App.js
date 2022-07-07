import React from 'react';
import AddUser from "./componenents/Users/AddUser";
import UsersList from "./componenents/Users/UsersList";

function App() {
    return (
        <div>
            <AddUser/>
            <UsersList users={[]}/>
        </div>
    );
}

export default App;
