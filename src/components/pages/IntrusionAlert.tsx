import React from 'react'
import { Link } from 'react-router-dom';

// Import Components
import Empire from '../ui/icons/Empire';

// Import Styles
import '../../styles/intrusionAlert.scss';

type Props = {}

const IntrusionAlert = (props: Props) => {
  return (
      <div className="intrusionAlert-container">
        <header>
          <Empire className="empire-icon" />
        </header>
        <p>you attempt to break into an Imperial secure system, authorities have been notified and are on their way to arrest and question you.</p>
        <p>Stay where you are !!</p>
        <Link to="/">Repent to the Dark Side</Link>
      </div>
  )
}

export default IntrusionAlert