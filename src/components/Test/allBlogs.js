import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:6000/api/v1/users/';

const allBlogs = () => {
  const [users, setUsers] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  const getAllUsers = () => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>User management</h1>
      {isLoding && <h2>isLoding...</h2>}
      {error && <h2>{error}</h2>}

      {users &&
        users.map((user) => {
          const { id, username, email } = user;

          return (
            <article key={id}>
              <p>{username}</p>
              <p>{email}</p>
            </article>
          );
        })}
    </div>
  );
};

export default allBlogs;
