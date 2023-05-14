import React from 'react';
import Image from "next/image";
import Navbar from './navbar/Navbar';
import NewBooking from './newBooking/NewBooking';
import { StaticImageData } from "next/image"
import { newBookingInterface } from '../../../../interfaces/headerInterfaces/header.interfaces';
import './Header.scss';


interface headerDataInterface {
    headerData: {
        logo: logoInterface
        newBooking: newBookingInterface
        navbar: string[]
    }
}

interface logoInterface {
    image: StaticImageData,
    alt: string,
}



export default function Header(props: headerDataInterface) {
    const { newBooking, navbar } = props.headerData
    const { image, alt } = props.headerData.logo
    return (
        <section className='header'>
            <section className='header__upper'>
                <div className='header__upper__logo'>
                    <Image src={image} alt={alt} />
                </div>
                <Navbar {...navbar} />
                <NewBooking {...newBooking} />
            </section>
        </section>
    )
}
