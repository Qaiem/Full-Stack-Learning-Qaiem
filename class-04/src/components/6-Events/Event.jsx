// import { useState } from "react"

// const events = () => {

//   const [firstname, setfirstname] = useState("Qaiem")

//   return (
//     <div>My Name is {firstname}</div>
//   )
// }

// export default events

// import { useState } from "react"

// const events = () => {

//   // const [firstname, setfirstname] = useState("Qaiem")

//   const clickhandler = () => {
//   console.log("Hello its running")
//   }
//   return (
//     // <div>My Name is {firstname}</div>
//     <button onClick={clickhandler}>Change Name</button>
//   )
// }

// export default events

// import { useState } from "react"

// const events = () => {


//   const clickhandler = (val) => {
//   console.log(val)
//   }
//   return (
  
//     <button onClick={() => clickhandler("Hello")}>Change Name</button>
//   )
// }

// export default events

import { useState } from "react"

const events = () => {
  const [firstname, setfirstname] = useState("Qaiem")

  const clickhandler = () => {
  setfirstname("Umar")
  }

  return (
    <div>
    <div>My Name is {firstname}</div>
    <button onClick={clickhandler}>Change Name</button>
    </div>
  )
}

export default events