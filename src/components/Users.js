import React from 'react';
import { useCrud } from '../utils/Crud/useCrud';
import { Link, useHistory, withRouter } from 'react-router-dom';

function Users() {
  const history = useHistory();
  const { data, remove } = useCrud('/users');

  function handleRegister() {
    history.push(`/register`);
  }
  
  function handleDetail(id) {
    history.push(`/user/${id}`);
  }

  function handleDelete(id) {
    const resp = window.confirm('¿Está seguro?');
    if (resp) {
      remove(id);
    }
  }

  return (
    <>
      <button onClick={handleRegister}>Register</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={'item' + index}>
                  <td>{item.id}</td>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleDetail(item.id)}> EDIT </button>{' '}
                    <button href='' onClick={() => handleDelete(item.id)}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <p>
        <Link to='/dashboard'>View Dashboard</Link>
      </p>
    </>
  );
}

export default withRouter(Users);
