import React from 'react'
import Link from 'next/link'
import navbar from '/styles/Navbar.module.scss'
import dropdown from '/styles/Dropdown.module.scss'
import Wallet from './WalletButton'

const Navbar = () => {
  return (
    <>
        <div className={navbar.wrapper}>
            <div className={navbar.title}>
                <Link href="/" scroll={false}>
                    <a>
                        NFTLK Project
                    </a>
                </Link>
            </div>
            <div className={navbar.nav_items_container}>
                <Link href="/about" scroll={false}>
                    <a className={navbar.nav_items}>
                        <h3>About</h3>
                    </a>
                </Link>
                <Link href="/contact" scroll={false}>
                    <a className={navbar.nav_items}>
                        <h3>contact</h3>
                    </a>
                </Link>     
            </div>
            <div>
                <Wallet />
            </div>
        </div>
    </>
  )
}

export default Navbar