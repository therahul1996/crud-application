import React from 'react';

function UserList(props) {
  return (
    <div className="card">
      <div className="card-header">View users</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 ? (
              props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.editRow(user);
                      }}
                      className="btn btn-info text-light btn-sm me-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => props.deleteUser(user.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserList;
