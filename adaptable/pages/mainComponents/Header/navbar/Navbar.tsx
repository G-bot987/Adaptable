import React from 'react'
import styles from './Navbar.module.scss';


export default function Navbar(props: string[]) {
  return (
    <ul className={styles.navbar}>
      {Object.keys(props).map((option: any, index: number) => (
        <li className={styles.navbar__btnWrapper} key={index}>
          <button className={styles.navbar__btnWrapper__btn}>
            {props[option]}
          </button>
        </li>
      ))}
    </ul>
  )
}
