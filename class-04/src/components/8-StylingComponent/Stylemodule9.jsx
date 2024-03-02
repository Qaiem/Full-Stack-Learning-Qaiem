// import React from 'react'

// const Stylemodule9 = () => {
//   return (
//     <div>Stylemodule9</div>
//   )
// }

// export default Stylemodule9


// import React from 'react'
// import './Style2.css'
// import Advantagemodule10 from './Advantagemodule10'

// const Stylemodule9 = () => {
//   return (
//     <div>
//         <h1 className='primary'>O Bhai Itne Files</h1>
//       <Advantagemodule10/>
//     </div>
//   )
// }

// export default Stylemodule9


// import './Style2.css'
import BhaiBhai from './Style8.module.css'
import Advantagemodule10 from './Advantagemodule10'

const Stylemodule9 = () => {
  return (
    <div>
        {/* <h1 className='primary'>O Bhai Itne Files</h1> */}
        <h1 className={BhaiBhai.primary}>O Bhai Itne Files</h1>
      <Advantagemodule10/>
    </div>
  )
}

export default Stylemodule9