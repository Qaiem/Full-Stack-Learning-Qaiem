// import React from 'react'
// import "./Style2.css"

// //class on condition
// const Stylesheet1 = () => {
//      let primary = true;
//     let myclass = primary ? "primary" : ""//ternary conditon like if else but this is easy method
//                         //or
//     // let myclass;

//     // if(primary){
//     //     myclass = "primary";
//     // }
//     // else{
//     //     myclass = ""
//     // }
//   return (
//     <div className='font'>
//       <h1 className='name'>
//         Qaiem
//       </h1>
//       <h2 className={myclass}>
//           Qami
//       </h2>
//     </div>
//   )
// }

// export default Stylesheet1


//By This Way Class Will overwrite
// const Stylesheet1 = () => {
//     let primary = true;
//     let myclass = primary ? "primary" : ""
//   return (
//     <div>
//       <h1 className={myclass,"secondclass"}>MAKHAN</h1>//By using two class it overwrite the first one
//     </div>//we only use one class in this method
//   )
// }

// export default Stylesheet1

function Stylesheet1(){
    //let myclass = "primary";
    let primary = true;
    let myclass = primary ? "primary" : ""
    return(
        <div>
            <h1 className={`${myclass} name font primary`}>WAH BHAI</h1>
        </div>
    )
}

export default Stylesheet1