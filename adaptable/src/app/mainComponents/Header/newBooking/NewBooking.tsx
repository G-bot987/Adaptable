import React from 'react'
import Image from 'next/image'
import './NewBooking.scss'


import { newBookingInterface } from '../../../../../interfaces/headerInterfaces/header.interfaces'

export default function NewBooking(props: newBookingInterface) {
    console.log(props)
    const { image, alt, text } = props

    return (
        <section className='buttonSection' >
            <div className='buttonSection__imgContainer'>
                <Image src={image} alt={alt} />
            </div>

            <button className='buttonSection__button'>
                {text}
            </button>
        </section>
    )
}
