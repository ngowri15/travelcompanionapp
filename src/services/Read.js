import React, { useEffect, useState } from "react"


{/*const Read = () => {
 const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
          );}*/}

          function App() {
            const [name, setName] = useState("");
            const [surname, setSurname] = useState("");
            const [age, setAge] = useState("");
            const [users, setUsers] = useState([]);
          
            const handleSubmit = (event) => {
              event.preventDefault();
              setUsers([...users, { name, surname, age }]);
              setName("");
              setSurname("");
              setAge("");
            };
          
            return (
              <div style={{ marginLeft: "50px" }}>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </label>
                  <label>
                    Surname:
                    <input
                      type="text"
                      value={surname}
                      onChange={(event) => setSurname(event.target.value)}
                    />
                  </label>
                  <label>
                    Age:
                    <input
                      type="number"
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
                <ul>
                  {users.map(({ name, surname, age }) => (
                    <li>
                      Name: {name}, Surname: {surname}, Age: {age}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
function Read(){ 
  const [ReadAllBooks, setReadAllBooks] = useState([]);

  useEffect(() => {
     fetch('http://localhost:8585/ReadAllBooks')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setReadAllBooks(data);
        })
        .catch((err) => {
           console.log(err.message);
        });


  }, []);

return (
  <>
 <h1>Called Book API</h1>
 <ul>
                  {ReadAllBooks.map(({ isbnId, bookName, authorName }) => (
                    <li>
                      Book Id: {isbnId}, Book Name: {bookName}, Author Name: {authorName}
                    </li>
                  ))}
                </ul>
 
 </>
);
};
export default Read;