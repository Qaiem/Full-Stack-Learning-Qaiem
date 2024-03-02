// import React from 'react'

// const MyRoutes = () => {
//   return (
//     <div>Routes</div>
//   )
// }

// export default MyRoutes

import React from 'react'
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ABOUT from "./ABOUT";
import HOME from "./HOME";
import MERACONTACT from './MERACONTACT';
import Navigation from './Navigation';

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Link to={"HOME"}>HOME</Link>
      <Link to={"ABOUT"}>ABOUT</Link>
      <Link to={"MERACONTACT"}>CONTACT</Link> */}

      <Navigation/>
      <Routes>
         <Route path='HOME' element={<HOME />}    />
         <Route path='ABOUT' element={<ABOUT />}  />
         <Route path='MERACONTACT' element={<MERACONTACT />}  />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
