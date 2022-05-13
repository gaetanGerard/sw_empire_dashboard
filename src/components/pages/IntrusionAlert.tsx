import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const IntrusionAlert = (props: Props) => {
  return (
      <div>
        <div>IntrusionAlert</div>
        <Link to="/">Back</Link>
      </div>
  )
}

export default IntrusionAlert