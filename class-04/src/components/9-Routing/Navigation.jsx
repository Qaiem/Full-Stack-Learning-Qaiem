import React from 'react'

import {Link} from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <Link to={"HOME"}>HOME</Link>
      <Link to={"ABOUT"}>ABOUT</Link>
      <Link to={"MERACONTACT"}>CONTACT</Link>
    </div>
  )
}

export default Navigation
