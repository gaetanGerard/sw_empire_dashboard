import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import Typography from './Typography';

// Import Types
import { WANTED } from '../../context/types';

// Import Styles
import '../../styles/card.scss';

type Props = {
    wanted: WANTED
}

const Card = ({wanted}: Props) => {
  return (
    <Link to="/wanted-profile-detail" className="card" state={{data: wanted}}>
        <div className="internal-card">
            <img src={wanted.picture} alt={`Wanted ${wanted.name}`} className={wanted.status === "Dead" ? "grayscale" : ""} />
            <div className={wanted.status === "Captured" ? "wanted-status ws-white" : wanted.status === "Dead" ? "wanted-status ws-white" : "wanted-status ws-red"}>
                <Typography HTMLElement="p">{wanted.status}</Typography>
            </div>
        </div>
    </Link>
  )
}

export default Card
