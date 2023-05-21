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
        breadCrumbs: string[]
        title: string
        assessmentBtn: assessmentBtnInterface
    }
}

interface logoInterface {
    image: StaticImageData,
    alt: string,
}

interface assessmentBtnInterface {
    text: string
}


export default function Header(props: headerDataInterface) {
    const { newBooking, navbar, breadCrumbs, title, assessmentBtn } = props.headerData
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
            <section className='header__lower'>
                <ul className='header__lower__breadCrumbs'>
                    {breadCrumbs.map((crumb: string, index: number) => (
                        <li key={index} className='header__lower__breadCrumbs__container'>
                            <p>
                                {crumb}
                            </p>
                            {index < breadCrumbs.length - 1 && (
                                <div className='header__lower__breadCrumbs__container__arrowContainer'>
                                    <div className='header__lower__breadCrumbs__container__arrowContainer__arrow'></div>
                                </div>
                            )}
                        </li>
                    ))
                    }
                </ul>


                <h1 className='header__lower__titleCard'>
                    {title}
                </h1>

                <button className='header__lower__assessmentBtn'>

                    {assessmentBtn.text}
                </button>

            </section>
        </section>
    )
}
