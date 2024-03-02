// import React from 'react'

// const Inline5 = () => {
//   return (
//     <div>Inline5</div>
//   )
// }

// export default Inline5

import {headingStyle, paragraphstyle, divStyle} from './Style4'

  function Inline5() {
    return (
      <div style={divStyle}>
        <h1 style={headingStyle}>Yeh Mera Style ha</h1>
        <p style={paragraphstyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          quibusdam. Provident, praesentium atque, distinctio mollitia rem
          accusantium quae vero quo eligendi, cupiditate est sequi quidem.
          Dignissimos ad Dignissimos ad temporibus eius perspiciatis.
        </p>
      </div>
    );
  }
  
  export default Inline5;
  