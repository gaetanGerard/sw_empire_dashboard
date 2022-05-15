import React from 'react';

// Import Types
import { WANTED } from '../../context/types';

// Import Styles
import '../../styles/card.scss';

type Props = {
    wanted: WANTED
}

const Card = ({wanted}: Props) => {

    console.log(wanted)

  return (
    <div className="card">Card</div>
  )
}

export default Card