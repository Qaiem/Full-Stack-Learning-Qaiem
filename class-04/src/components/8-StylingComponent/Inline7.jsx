// import React from 'react'

// const Inline7 = () => {
//   return (
//     <div>Inline7</div>
//   )
// }

// export default Inline7

// import {headingStyle, paragraphstyle, divStyle} from './Style6'
import mystyle from './Style6'

  function Inline7() {
    return (
      <div style={mystyle.divStyle}>
        <h1 style={mystyle.headingStyle}>Yeh Mera Style ha</h1>
        <p style={mystyle.paragraphstyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          quibusdam. Provident, praesentium atque, distinctio mollitia rem
          accusantium quae vero quo eligendi, cupiditate est sequi quidem.
          Dignissimos ad Dignissimos ad temporibus eius perspiciatis.
        </p>
      </div>
    );
  }
  
  export default Inline7;
  