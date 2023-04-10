import React, { useState } from 'react';
import UserList from './list/UserList';
import AddUser from './forms/AddUser';
import EditUser from './forms/EditUser';

function App() {
  const usersData = [
    { id: 1, name: 'Regan', email: 'economics@gmail.com' },
    { id: 2, name: 'Mackinzie', email: 'forster@gmail.com' },
    { id: 3, name: 'Francis', email: 'nemesis@gmail.com' },
  ];

  const initialFormState = { id: null, name: '', email: '' };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <UserList users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
