import React from 'react'
import lan from '/styles/Landing.module.scss'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
  return (
    <>
        <Navbar />
        <h1 className={lan.caption}>
            About Works
        </h1>
        <Footer />
    </>
  )
}