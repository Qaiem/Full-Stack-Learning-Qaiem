import React from 'react'

const destructuring = () => {
  return (
    <div>
      <Mycomp firstname="Qaiem" lastname="Mehdi"/>
    </div>
  )
}

export default destructuring

// const Mycomp = (props) => {
//   return (
//   <h1>Hello {props.firstname} {props.lastname}</h1>
//   )
// }

// const Mycomp = (props) => {
//   const {firstname,lastname}= props;
//   return (
//   <h1>Hello {props.firstname} {props.lastname}</h1>
//   )
// }

const Mycomp = ({firstname,lastname}) =>{
  return(
    <h1>Hello {firstname} {lastname}</h1>
  )
}