import React, { ChangeEvent } from 'react'

// Import Component
import Input from '../ui/Input';

// Import Styles
import "../../styles/auth.scss";

type Props = {}

const Auth = (props: Props) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div className="auth-container">
      <Input type="text" name="username" onChange={onChange} label="Username" errorMsg="Username Required" />
      <Input type="text" name="password" onChange={onChange} label="Password" errorMsg="Password Required" />
    </div>
  )
}

export default Auth