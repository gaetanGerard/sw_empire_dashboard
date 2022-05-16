import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../../styles/notFound.scss';

// Import Components
import Empire from '../ui/icons/Empire';

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="not-found-container">
      <div className="backHome-container">
        <Empire className="empire-icon" />
        <p>You are not where you should be ! Wait for the law enforcer</p>
        <Link to="/home">Back Home</Link>
        <footer>
          <a href="https://codepen.io/KristopherVanSant/pen/wPKPPX" rel='noreferrer noopener nofollow' target="_blank">Art by Kristopher Van Sant</a>
        </footer>
      </div>
      <div className="propaganda-container">
        <div id="moon"></div>
        <div id="stars">
          <div className="stars"></div>
          <div className="rstars"></div>
        </div>
        <div id="ships"  data-tilt  data-tilt-max="4">
          <div className="ships">
            <img id="sd3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/sd3.png" alt="star destroyer" />
            <img id="sd4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/sd4.png" alt="star destroyer" />
            <img id="sd1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/sd1.png" alt="star destroyer" />
            <img id="sd2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/stardestoryer2.png" alt="" />
            <img id="ship" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/ship.png" alt="ship" />
          </div>
          <div className="ships ties">
            <img id="tie1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/mediumtie.png" alt="medium tie fighter" />
            <img id="tie2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/largetie.png" alt="large tie fighter" />
            <img id="tie3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/tinytie.png" alt="tiny tie fighter" />
          </div>
        </div>
        <div id="message">
          <h2 className="rb">Explore the Galaxy...</h2>
          <h2 className="join">Join The</h2>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/108463/empire.png" alt="" />
          <h1 className="rb">Imperial navy</h1>
        </div>
      </div>
    </div>

  )
}

export default NotFound