import React, { useContext, useEffect } from 'react';

// Import Context
import { AuthContext } from '../../context/auth/AuthProvider';


type Props = {}

const Home = (props: Props) => {
  const { login, user } = useContext(AuthContext);

  useEffect(() => {
    if(localStorage.getItem('user') && user === null) {
      const u = JSON.parse(localStorage.getItem('user') || '{}')
      login({ username: u.username, password: u.password })
    };
  }, [login, user])

  console.log(user)

  return (
    <div>Welcome</div>
  )
}

export default Home