import Layout from '../components/Layout'
import { useState } from 'react'
// Styles
import classes from '../styles/product.module.css'
// Images
import SecOneBg from '../src/images/product/icons.png'
import Picture1 from '../src/images/product/pic1.svg'
import Picture2 from '../src/images/product/pic2.svg'
import Picture3 from '../src/images/product/pic3.svg'
import Picture4 from '../src/images/product/pic4.svg'
import YouTube from '../src/images/product/youtube.svg'
import Kik from '../src/images/product/kik.svg'
import Linkedin from '../src/images/product/linkedin.svg'
import Periscope from '../src/images/product/periscope.svg'


export default function Password() {
    const [agree, setAgree] = useState(false)
    const [tryAgree, setTryAgree] = useState(false)


    return(
        <Layout title={'Product'} secName='Product'>
            <div className={classes.sec1}>
                <img className={classes.bg} src={SecOneBg.src} alt="Automatr"/>

                <div className={classes.content}>
                    <h1>Automations and<br/>data extraction<br/>to help you grow faster</h1>
                    <div className={classes.inputsWrapper}>
                        <div className={classes.inputs}>
                            <input type="mail" name="mail" placeholder='Enter your email'/>
                            <div className={classes.line}></div>
                            <input type="password" name="password" placeholder='Password'/>
                        </div>
                        <button>Try it free</button>
                    </div>
                    <div onClick={()=>setAgree(!agree)} className={classes.agree}>
                        <div className={[classes.agreeBox, agree && classes.submit].join(' ')}></div>
                        <p>I agree to the processing and use of my personal data</p>
                    </div>
                </div>
        
            </div>

            <div className={[classes.sec2, 'container'].join(' ')}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <img className={classes.ico1} src={YouTube.src} alt="YouTube"/>
                        <h1>use our action automations</h1>
                        <p>The automations Mr. Fast offers are able to: </p>
                        <ul>
                            <li>Auto-follow, auto-connect profiles and auto-like posts in all social media platforms</li>
                            <li>Send personalized emails</li>
                            <li>Accept invites and requests</li>
                        </ul>
                    </div>

                    <div className={classes.picture}>
                        <img src={Picture1.src} alt="Automatr"/>
                    </div>

                    <div className={classes.picture}>
                        <img src={Picture2.src} alt="Automatr"/>
                    </div>

                    <div className={classes.text}>
                        <img className={classes.ico2} src={Periscope.src} alt="Periscope"/>
                        <h1>extract data from<br/>different websites</h1>
                        <p>Turn any website into a source of information. Use the extracted data in your business operations.</p>
                        <ul>
                            <li>Ready-made automations for all main social media platforms and websites (e.g. Facebook, Twitter, Instagram, LinkedIn, etc)</li>
                            <li>Data saved in XLS, CVS & JSON format</li>
                        </ul>
                    </div>

                    <div className={classes.text}>
                        <img className={classes.ico3} src={Kik.src} alt="Kik"/>
                        <h1>make your own automation</h1>
                        <p>Create your automation with Mr. Fast and share it with the community.</p>
                        <ul>
                            <li>Request new automations</li>
                            <li>Create your own automations</li>
                            <li>Earn money</li>
                        </ul>
                    </div>

                    <div className={classes.picture}>
                        <img src={Picture3.src} alt="Automatr"/>
                    </div>

                    <div className={classes.picture}>
                        <img src={Picture4.src} alt="Automatr"/>
                    </div>

                    <div className={classes.text}>
                        <img className={classes.ico4} src={Linkedin.src} alt="Linkedin"/>
                        <h1>run automations in the cloud</h1>
                        <p>Our automations run in the cloud, 24/7.</p>
                        <ul>
                            <li>Automations working with turned off computer</li>
                            <li>Getting notification about the end of the work via email</li>
                            <li>No need to check in on the automation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.sec3}>
                <h1>Try it free for 14 days</h1>
                <div className={classes.tryit}>
                    <p className={classes.info}>Start getting results right now</p>
                    <input type="email" name="email" placeholder='Enter your email'/>
                    <div onClick={()=>setTryAgree(!tryAgree)} className={classes.agree}>
                        <div className={[classes.agreeBox, tryAgree && classes.submit].join(' ')}></div>
                        <p>I agree to the processing and use of my personal data</p>
                    </div>
                    <button>Try it free</button>
                </div>
            </div>
        </Layout>
    )
}