import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../../styles/loading.scss';

// Import Components
import Typography from './Typography';

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="loading">
        <Link to="https://codepen.io/yusufbkr/pen/LGEQGK">Made by Yusuf Bakir</Link>
        <Typography HTMLElement="h1">Loading...</Typography>
        <div className="soldier"></div>
    </div>
  )
}

export default Loading