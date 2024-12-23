import React from 'react';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

function App() {
  return (
    <div>
      <h1>Flask-React App</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
