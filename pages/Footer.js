import React, { useEffect } from 'react'
import Link from 'next/link'
import footer from '/styles/Footer.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className={footer.footer_container}>
            <div className={footer.left_section}>
                <Link href="/" scroll={false}>
                    <a>
                        NFTLK Project
                    </a>
                </Link>
            </div>
            <div className={footer.footer_right_section}>
                <p className={footer.copyright}>
                    ©2022-2032.
                </p>
                <div className={footer.conditions}>
                    <Link href="terms-of-use">
                        <a>
                            <p className={footer.terms}>
                                Terms of Use
                            </p>
                        </a>
                    </Link>
                    <Link href="privacy-policy">
                        <a>
                            <p className={footer.privacy}>
                                Privacy Policy
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}