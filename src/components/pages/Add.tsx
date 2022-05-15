import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

// Import Types
import { WANTED } from '../../context/types';

// Import Components
import Input from '../ui/Input';
import Header from '../ui/Header';

// Import Utility
import { loadImage } from '../../utils/utility';

type Props = {}

const Add = (props: Props) => {
    const location = useLocation();
    const params = useParams();
    const state = location.state as { data: WANTED };

    console.log(params)

  return (
    <div>
        <Header />
    </div>
  )
}

export default Add