import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { userWithFetch } from './queris';
import { createUserApi, deleteUserApi, fetchUserApi, updateUserApi } from './Apis';

function App() {
  const [users, setUsers] = useState([])
  const [activeUser, setActiveUser] = useState({
    name: '',
    email: '',
    gender: ''
  })

  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = async () => {
    try {
      const data = await userWithFetch()
      if (data.data.users.nodes.length)
        setUsers(data.data.users.nodes)
    } catch (error) {
      console.log('error', error)
    }
  }

  const onDelete = async (id) => {
    try {
      const data = await deleteUserApi({
        id,
      })
      const responseData = JSON.parse(data)
      setUsers(users.filter(i => i.id !== id))
      // if (responseData.data) {
      //   return getUserList()
      // }
      alert('Deleted successfully')
    } catch (error) {
      console.log('error', error)
    }
  }

  const onChange = (e, employeeId) => {
    const { name, value } = e.target
    const editData = users.map((item) =>
      item.id === employeeId && name ? { ...item, [name]: value } : item
    )
    setUsers(editData)
  }
  const onActiveChange = (e) => {
    const { name, value } = e.target
    
    setActiveUser({
      ...activeUser,
      [name]: value,
    })
  }
  const onUpdate = async (id) => {
    try {
      const updateData = users.find(i => i.id === id)
      const data = await updateUserApi({
        id,
        ...updateData
      })
      getUserList()
    } catch (error) {
      console.log('error', error)
    }
  }
  const onADD = async () => {
    if (!activeUser.email || !activeUser.name || !activeUser.gender) return alert('Please fill all values!')
    try {
      const data = await createUserApi({
        ...activeUser
        , status: "active"
      })

    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <tr>
            <td>
              <input
                name="name"
                value={activeUser.name}
                type="text"
                onChange={(e) => onActiveChange(e)}
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="email"
                value={activeUser.email}
                type="email"
                onChange={(e) => onActiveChange(e)}
                placeholder="Type Email"
              />
            </td>
            <td>
              <input
                name="gender"
                type="text"
                value={activeUser.gender}
                onChange={(e) => onActiveChange(e)}
                placeholder="Type Position"
              />
            </td>
            <td>
              <a href="#" class="btn color-03" onClick={() => onADD()}>
                <span>Add</span>
              </a>
            </td>
          </tr>
          <h1 className="title">ReactJS Editable Table</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, email, gender, id },) => (
                <tr key={id}>
                  <td>
                    <input
                      name="name"
                      value={name}
                      type="text"
                      onChange={(e) => onChange(e, id)}
                      placeholder="Type Name"
                    />
                  </td>
                  <td>
                    <input
                      name="email"
                      value={email}
                      type="email"
                      onChange={(e) => onChange(e, id)}
                      placeholder="Type Email"
                    />
                  </td>
                  <td>
                    <input
                      name="gender"
                      type="text"
                      value={gender}
                      onChange={(e) => onChange(e, id)}
                      placeholder="Type Position"
                    />
                  </td>
                  <td>
                    <a href="#" class="btn color-03" onClick={() => onUpdate(id)}>
                      <span>Update</span>
                    </a>
                    <a href="#" class="btn color-01" onClick={() => onDelete(id)}>
                      <span>Delete</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
