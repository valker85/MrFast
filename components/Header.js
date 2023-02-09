import { useEffect, useState } from "react";
import Link from "next/link";
// Styles
import classes from '../styles/header.module.css'
// Images
import Logo from '../src/images/home/logo.svg'
import LogoBlack from '../src/images/home/logo-black.svg'

export default function Header({headerColor}) {
    const [fixed, setFixed] = useState(false)
    const [logo, setLogo] = useState(Logo)
    
    const listenScrollEvent = () => {
        if(window.scrollY > 300){
            setFixed(true)
            setLogo(Logo)
        } else{
            setFixed(false)
            setLogoColor()
        }
    }

    function setLogoColor() {
        if(headerColor !== 'white'){
            setLogo(LogoBlack)
        } else {
            setLogo(Logo)
        }
    }
    
    useEffect(() => {
        setLogoColor()
        window.addEventListener("scroll", listenScrollEvent)
        return () => {
          window.removeEventListener("scroll", listenScrollEvent)
        }
    }, [fixed])

    return ( 
    <div className={[classes.header, fixed ? classes.fixed : ''].join(' ')}>
        <div className={classes.left}>
            <Link href="/"><img src={logo.src} alt="Automatr" /></Link>
        </div>
        <div style={{ color: headerColor }} className={classes.right}>
            <div className={classes.pages}>
                <ul className={classes.pagesUl}>
                    <li className={classes.li}>
                        <Link className={classes.a} href="/product">Product</Link>
                    </li>
                    <li className={classes.li}>
                        <Link className={classes.a} href="/automations/linkedin">Automations<span>›</span></Link>
                        <div className={classes.list}>
                            <ul>
                                <li>
                                    <Link href='/automations/linkedin'>Linkedin</Link>
                                </li>
                                <li>
                                    <Link href='/automations/facebook'>Facebook</Link>
                                </li>
                                <li>
                                    <Link href='/automations/instagram'>Instagram</Link>
                                </li>
                                <li>
                                    <Link href='/automations/google'>Google</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={classes.li}>
                        <a className={classes.a}>Knowledge<span>›</span></a>
                        <div className={classes.list}>
                            <ul>
                                <li>
                                    <Link href='/faq'>help center</Link>
                                </li>
                                <li>
                                    <Link href='/blog'>blog</Link>
                                </li>
                                <li>
                                    <Link href='/'>templates</Link>
                                </li>
                                <li>
                                    <Link href='/'>integrations</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={classes.li}>
                        <Link className={classes.a} href="/pricing">Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className={classes.login}>
                <Link href='/login'>Log in</Link>
                <Link className={classes.signUp} href='/signup'>Sing up</Link>
            </div>
        </div>
    </div>
    )
}
  