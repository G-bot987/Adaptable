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
  const { navbar, navSelected, SetNavSelected, newBooking } = props
  const { image, alt, text } = newBooking || {};
  const [openNavBar, setOpenNavBar] = useState(false)



  useEffect(() => {
    if ((window.innerWidth >= 1023)) {
      setOpenNavBar(true)
    }
  }, [])

  useEffect(() => {
  }, [navSelected])

  useEffect(() => {
  }, [openNavBar])

  return (
    <ul className={`${styles.navbar} ${openNavBar ? styles[`navbar--open`] : styles[`navbar--closed`]}`}>

      <li className={styles.navbar__openBtnContainer}>
        <button onClick={() => { setOpenNavBar(!openNavBar) }} className={styles.navbar__openBtnContainer__btn}>
          <div className={` ${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openTop'] : ''}`} />
          <div className={`${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openMiddle'] : ''}`} />
          <div className={`${styles.navbar__openBtnContainer__btn__bar} ${openNavBar ? styles['navbar__openBtnContainer__btn__bar--openBtm'] : ''}`} />
        </button>
      </li>

      {navbar?.map((option: any, index: number) => (
        <li className={`${openNavBar ? styles[`navbar__btnWrapper`] : styles[`navbar__btnWrapper--hidden`]} ${navSelected === option ? styles['navbar__btnWrapper--selected'] : ''}`} key={index}>
          <button onClick={() => { SetNavSelected(`${option}`) }} className={`${styles.navbar__btnWrapper__btn} ${navSelected !== option ? styles['navbar__btnWrapper__btn--notSelected'] : styles['navbar__btnWrapper__btn--selected']}`}>
            {option}
          </button>
        </li>
      ))}


      <li className={`${openNavBar ? styles['navbar__imgContainer'] : styles['navbar__imgContainer--hidden']}`}>
        <button className={styles.navbar__imgContainer__myAccBtn}>
          <Image src={image} alt={alt} />
        </button>
      </li>


      <li className={`${openNavBar ? styles['navbar__containerButton--open'] : styles['navbar__containerButton--hidden']}`}>
        <button className={styles.navbar__container__button}>
          {text}
        </button>
      </li>
    </ul>
  )
}
