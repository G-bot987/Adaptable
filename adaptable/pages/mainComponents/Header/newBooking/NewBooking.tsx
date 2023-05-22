import React from 'react'
import Image from 'next/image'
import styles from './NewBooking.module.scss'
import { newBookingInterface } from '../../../../interfaces/headerInterfaces/header.interfaces'



export default function NewBooking(props: newBookingInterface) {
    const { image, alt, text } = props

    return (
        <section className={styles.buttonSection} >
            <div className={styles.buttonSection__imgContainer}>
                <Image src={image} alt={alt} />
            </div>

            <button className={styles.buttonSection__button}>
                {text}
            </button>
        </section>
    )
}
