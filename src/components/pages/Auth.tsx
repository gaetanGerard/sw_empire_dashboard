import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom';

// Import Component
import Input from '../ui/Input';
import Typography from '../ui/Typography';

// Import Context
import { AuthContext } from '../../context/auth/AuthProvider';

// Import Data
import data from "../../data/user.json";

// Import Styles
import "../../styles/auth.scss";

// Import Components
import Button from '../ui/Button';

type Props = {}

const Auth = (props: Props) => {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const [username, setUsername] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);
  const [counter, setCounter] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "username") setUsername(e.target.value);
    if(e.target.name === "password") setPassword(e.target.value);
  }

  const onClick = () => {
    if(username === data.username && password === data.password) {
      login({ username, password });
      localStorage.setItem('user', JSON.stringify({ username, password }));
      navigate("/home");
    } else {
      console.log("Invalid credentials");
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    if(counter === 3) {
      navigate("/intrusion-alert");
    }
  }, [counter])

  return (
    <div className="auth-container">
      <Typography HTMLElement="h2">Login</Typography>
      <Input type="text" name="username" onChange={onChange} label="Username" errorMsg="Username Required" />
      <Input type="password" name="password" onChange={onChange} label="Password" errorMsg="Password Required" />
      <Button dataHover="Logged In" btnType="button" onClick={onClick}><div>Logged In</div></Button>
    </div>
  )
}

export default Auth