import React from 'react';

// Import Styles
import '../../styles/header.scss';

// Import Icons
import Empire from './icons/Empire';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="main-nav">
        <Empire className="empire-icon" />
    </header>
  )
}

export default Header