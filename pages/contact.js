import React from 'react'
import lan from '/styles/Landing.module.scss'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
        <Navbar />
        <h1 className={lan.caption}>
            Contact Works
        </h1>
        <Footer />
    </>
  )
}