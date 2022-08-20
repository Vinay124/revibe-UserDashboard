// import React,{ useState } from 'react'
// import {Link} from 'react-router-dom'
// import { MenuItems } from './MenuItems'

// export default function menu() {

//     const [click, setclick] = useState(false);
//     const handleClick = () => setclick(!click);

//   return (
//     <React.Fragment>
//         <ul onClick={handleClick} className={click ? 'menuopen' : 'menuclose'}>
//             {MenuItems.map((item, index) => {
//                 return (
//                     <li className='menulinks' key={index}>
//                         <Link className={items.cName} to={item.path} onClick={() => setClick(false)}>{items.title}
//                         </Link>
//                     </li>
//                 )
//             })}

//         </ul>
//     </React.Fragment>
//   )
// }
