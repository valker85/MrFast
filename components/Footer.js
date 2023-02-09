import Link from 'next/link'
// Styles
import classes from '../styles/footer.module.css'
//Images
import logo from '../src/images/home/logo.svg'
import fb from '../src/images/footer/fb.svg'
import ldin from '../src/images/footer/in.svg'
import inst from '../src/images/footer/insta.svg'
import tw from '../src/images/footer/tw.svg'
import picture from '../src/images/footer/image.svg'
import planet from '../src/images/footer/planet.png'

export default function Footer() {
    
    return (
        <footer className={classes.footerWrapper}>
            <div className={classes.top}>
                <div className={[classes.contentBlock, classes.left].join(' ')}>
                    <div className={classes.logo}>
                        <img src={logo.src} alt="Automatr"/>
                    </div>
                    <p>Follow us:</p>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <img src={fb.src} alt="Facebook"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' target='_blank'>
                                <img src={inst.src} alt="Instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/' target='_blank'>
                                <img src={tw.src} alt="Twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/' target='_blank'>
                                <img src={ldin.src} alt="Linkedin"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={[classes.contentBlock, classes.center].join(' ')}>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Store</Link>
                        </li>
                        <li>
                            <Link href='/'>Product</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href='/'>Pricing</Link>
                        </li>
                        <li>
                            <Link href='/'>Extenstion</Link>
                        </li>
                        <li>
                            <Link href='/'>Join the beta</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href='/'>Help center</Link>
                        </li>
                        <li>
                            <Link href='/'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/'>Contact us</Link>
                        </li>
                    </ul>
                </div>

                <div className={[classes.contentBlock, classes.right].join(' ')}>
                    <img className={classes.pic} src={picture.src} alt='Automatr'/>
                    <img className={classes.planet} src={planet.src} alt='Automatr'/>
                </div>
            </div>

            <div className={classes.bottom}>
                <p>© Mr Fast, 2022</p>
                <p>Made by <a href='https://weflex.am/' target='_blank'>WeFlex</a></p>
            </div>
        </footer>
    )
}