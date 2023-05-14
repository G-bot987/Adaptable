import React from 'react'

import './Navbar.scss';


export default function Navbar(props: string[]) {
  console.log(props)
  return (
    <ul className='navbar'>
      {Object.keys(props).map((option: any, index: number) => (
        <li className='navbar__btnWrapper' key={index}>
          <button className='navbar__btnWrapper__btn'>
            {props[option]}
          </button>
        </li>
      ))}
    </ul>
  )
}
