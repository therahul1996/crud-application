import React, { useState } from 'react';

function AddUser(props) {
  const initialFormState = { id: null, name: '', email: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className="card mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.email) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <div className="card-header bg-info text-light">Add user</div>
      <div className="card-body">
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="form-control mb-2"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="form-control mb-2"
          value={user.email}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-sm">Add new user</button>
      </div>
    </form>
  );
}

export default AddUser;
