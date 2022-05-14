import React from 'react'
import { Link } from 'react-router-dom';

// Import Components
import Empire from '../ui/icons/Empire';

// Import Styles
import '../../styles/icons.scss';

type Props = {}

const IntrusionAlert = (props: Props) => {
  return (
      <div>
        <Empire className="empire-icon" />
      </div>
  )
}

export default IntrusionAlert