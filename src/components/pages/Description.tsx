import React from 'react'
import { useLocation } from 'react-router-dom';

// Import types
import { WANTED } from '../../context/types';

// Import Components
import Header from '../ui/Header';

type Props = {}

const Description = (props: Props) => {
    const location = useLocation();
    const state = location.state as { data: WANTED };

    console.log(state.data);

  return (
    <div className="wanted-profile-detail-container">
        <Header />
    </div>
  )
}

export default Description