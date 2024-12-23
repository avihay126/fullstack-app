import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    
    axios.post('http://localhost:5000/add_user', user)
      .then(response => {
        alert(response.data.message);
        setName('');
        setEmail('');
      })
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserForm;
