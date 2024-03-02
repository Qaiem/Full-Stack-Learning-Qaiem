// import React from 'react'

// const Inline3 = () => {
//   return (
//     <div>Inline3</div>
//   )
// }

// export default Inline3

const headingStyle = {
  fontSize: "70px", //camelCase key and value as a string
  color: "blue",
  backgroundColor: "pink",
  
};

const paragraphstyle = {
     fontSize:"60px",
     color: "darkred",
     backgroundColor: "green"

}
function Inline3() {
  return (
    <div>
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

export default Inline3;
