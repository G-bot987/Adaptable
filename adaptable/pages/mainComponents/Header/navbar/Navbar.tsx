import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss';
import { newBookingInterface } from '../../../../interfaces/headerInterfaces/header.interfaces'

interface navbarDataInterface {
  navbar: string[]
  navSelected: string
  SetNavSelected: (value: string) => void;
  newBooking: newBookingInterface
}

export default function Navbar(props: navbarDataInterface) {
  const { navbar, navSelected, SetNavSelected } = props
  const { image, alt, text } = props.newBooking

  const [openNavBar, setOpenNavBar] = useState(false)


  useEffect(() => {
  }, [navSelected])

  useEffect(() => {
  }, [openNavBar])

  return (
    <ul className={`${openNavBar ? styles[`navbar`] : styles[`navbar--closed`]}`}>

      <li className={styles.navbar__openBtnContainer}>
        <button onClick={() => { setOpenNavBar(!openNavBar) }} className={styles.navbar__openBtnContainer__btn}>
          <div className={` ${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openTop'] : ''}`} />
          <div className={`${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openMiddle'] : ''}`} />
          <div className={`${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openBtm'] : ''}`} />
        </button>
      </li>

      {openNavBar && navbar?.map((option: any, index: number) => (
        <li className={`${styles.navbar__btnWrapper} ${navSelected === option ? styles['navbar__btnWrapper--selected'] : ''}`} key={index}>
          <button onClick={() => { SetNavSelected(`${option}`) }} className={`${styles.navbar__btnWrapper__btn} ${navSelected !== option ? styles['navbar__btnWrapper__btn--notSelected'] : styles['navbar__btnWrapper__btn--selected']}`}>
            {option}
          </button>
        </li>
      ))}

      {openNavBar && <li className={styles.navbar__imgContainer}>
        <button>
          <Image src={image} alt={alt} />
        </button>
      </li>}

      {openNavBar && <li>
        <button className={styles.navbar__button}>
          {text}
        </button>
      </li>}
    </ul>
  )
}
