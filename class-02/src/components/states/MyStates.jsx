import { useState } from "react"

const MyStats = () => {
const [firstname, setfirstname] = useState("Qaiem")


  return (
    <div>MyStats {firstname}</div>
  )
}

export default MyStats