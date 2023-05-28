import React, { useEffect } from 'react'
import styles from './Navbar.module.scss';

interface navbarDataInterface {
  navbar: string[]
  navSelected: string
  SetNavSelected: (value: string) => void;
}

export default function Navbar(props: navbarDataInterface) {

  const { navbar, navSelected, SetNavSelected } = props

  useEffect(() => {
  }, [navSelected])

  return (
    <ul className={styles.navbar}>
      {navbar?.map((option: any, index: number) => (
        <li className={`${styles.navbar__btnWrapper} ${navSelected === option ? styles['navbar__btnWrapper--selected'] : ''}`} key={index}>
          <button onClick={() => { SetNavSelected(`${option}`) }} className={`${styles.navbar__btnWrapper__btn} ${navSelected !== option ? styles['navbar__btnWrapper__btn--notSelected'] : ''}`}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  )
}
