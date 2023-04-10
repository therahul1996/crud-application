import React, { useState, useEffect } from 'react';

function EditUser(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      className="card mb-3"
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <div className="card-header bg-info text-light">Edit user</div>
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
          type="text"
          name="email"
          placeholder="Email"
          class="form-control mb-2"
          value={user.email}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-sm me-1">Update user</button>
        <button
          onClick={() => props.setEditing(false)}
          className="btn btn-danger btn-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditUser;
