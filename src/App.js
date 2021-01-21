import {useState, useEffect} from 'react'
// https://randomuser.me/api

const App = () => {
  const [ userDataString, setUserDataString ] = useState('')
  const [ usersData, setUsersData] = useState([])
  const [ page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://randomuser.me/api?page=${page}`)
      .then(resp => resp.json())
      .then((data) => {
        setUserDataString(JSON.stringify(data.results[0]))
        console.log(data.results[0].name.first)
        setUsersData([...usersData, data.results[0]])
      })
  }, [page]);

  return (
    <div className="App">
      {console.log('users', usersData)}
      <h1>Welcome to the sandpit</h1>
      {/* <p>{userDataString}</p> */}
      {usersData.map(user => (
        <div key={user.id.value}>
          <h4>{user.name.first} {user.name.last}</h4>
          <img src={user.picture.large}></img>
        </div>
      )
      )}
      <button onClick={() => setPage(page + 1)}>Next User</button>
    </div>
  )
}

export default App;