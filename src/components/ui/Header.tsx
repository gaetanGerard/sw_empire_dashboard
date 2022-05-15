import React from 'react';
import { Link, useNavigate } from "react-router-dom";

// Import Styles
import '../../styles/header.scss';

// Import Icons
import Empire from './icons/Empire';
import Button from './Button';

type Props = {}

const Header = (props: Props) => {
    const navigate = useNavigate();

    const onclick = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('wantedList');
        navigate('/');
    }

  return (
    <header className="main-nav">
        <Link to="/home"><Empire className="empire-icon" /></Link>
        <Button btnType="button" onClick={onclick}>Logout</Button>
    </header>
  )
}

export default Header