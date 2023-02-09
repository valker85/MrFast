import { useState } from 'react'
import Layout from '../components/Layout'
// Styles
import classes from '../styles/pricing.module.css'
// Images
import Adidas from '../src/images/pricing/adidas.svg'
import Airbnb from '../src/images/pricing/airbnb.svg'
import Cisco from '../src/images/pricing/cisco.svg'
import Spotify from '../src/images/pricing/spotify.svg'
import Uber from '../src/images/pricing/uber.svg'
import Zalando from '../src/images/pricing/zalando.svg'


export default function Pricing() {
    const [type, setType] = useState('monthly')
    const monthly = [
        {title: 'Growth Hacker', price: 28, info: ['1h per day', '1 user', '5 Phantom slots']},
        {title: 'Business', price: 70, info: ['3h per day', '2 users', '10 Phantom slots'], popular: true},
        {title: 'Enterprise', price: 200, info: ['1h per day', '20 users', '5 Phantom slots']},
        {title: 'Premium', price: 900, info: ['1h per day', 'unlimited users', '5 Phantom slots']}
    ]
    const annually = [
        {title: 'Growth Hacker', price: 40, info: ['1h per day', '1 user', '5 Phantom slots']},
        {title: 'Business', price: 110, info: ['3h per day', '2 users', '10 Phantom slots'], popular: true},
        {title: 'Enterprise', price: 380, info: ['1h per day', '20 users', '5 Phantom slots']},
        {title: 'Premium', price: 1200, info: ['1h per day', 'unlimited users', '5 Phantom slots']}
    ]

    return(
        <Layout title={'Pricing'} secName='Pricing' headerColor={'dark'}>
            <div className={classes.sec1}>
                <div className={classes.content}>
                    <h1>Pricing</h1>
                    <p>Plans tailored for all businesses, built to scale with your needs 14-day free trial, no credit card required.</p>
                    <div className={classes.btnsWrapper}>
                        <button 
                            onClick={()=>{setType('monthly')}} 
                            className={[classes.monthly, type === 'monthly' ? classes.active : ''].join(' ')}>
                            Bill monthly
                        </button>
                        <button 
                            onClick={()=>{setType('annually')}} 
                            className={[classes.annually, type === 'annually' ? classes.active : ''].join(' ')}>
                            Bill annually
                        </button>
                    </div>
                </div>
            </div>

            <div className={[classes.sec2, 'container'].join(' ')}>
                <div className={classes.offersWrapper}>
                    {
                        type === 'monthly' 
                        ?
                        monthly.map((offer, i)=>{
                            return(
                            <div key={i} className={[classes.offer, offer.popular ? classes.popular : ''].join(' ')}>
                                <h3>{offer.title}</h3>
                                <div className={classes.price}>
                                    <span>$</span>
                                    <h2>{offer.price}</h2>
                                    <p>/ month</p>
                                </div>
                                <hr/>
                                <ul>
                                    {
                                        offer.info.map((text, i)=>{
                                            return <li key={i}>{text}</li>
                                        })
                                    }
                                </ul>
                                <button>Sign up</button>
                            </div>
                            )
                        })
                        :
                        annually.map((offer, i)=>{
                            return(
                            <div key={i} className={[classes.offer, offer.popular ? classes.popular : ''].join(' ')}>
                                <h3>{offer.title}</h3>
                                <div className={classes.price}>
                                    <span>$</span>
                                    <h2>{offer.price}</h2>
                                    <p>/ month</p>
                                </div>
                                <hr/>
                                <ul>
                                    {
                                        offer.info.map((text, i)=>{
                                            return <li key={i}>{text}</li>
                                        })
                                    }
                                </ul>
                                <button>Sign up</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={[classes.sec3, 'container'].join(' ')}>
                <h1>All features</h1>

                <div className={classes.names}>
                    <h3 className={classes.empty}></h3>
                    <h3 style={{color: '#202226'}}>Free forever</h3>
                    <h3 style={{color: '#00A37B'}}>Growth Hacker</h3>
                    <h3 style={{color: '#4556CF'}}>Business</h3>
                    <h3 style={{color: '#FF886D'}}>Enterprise</h3>
                    <h3 style={{color: '#00CFEE'}}>Premium</h3>
                </div>

                <div className={classes.table}>
                    <div className={classes.info}>
                        <div>
                            <h4>USAGE</h4>
                            <p className={classes.bg}>Execution time</p>
                            <p>Slots</p>
                        </div>

                        <div className={classes.block}>
                            <h4>ESSENTIAL</h4>
                            <p className={classes.bg}>Scheduled launches</p>
                            <p>Workflows</p>
                            <p className={classes.bg}>Scheduled launches</p>
                            <p>Workflows</p>
                        </div>

                        <div className={classes.block}>
                            <h4>USAGE</h4>
                            <p className={classes.bg}>Execution time</p>
                            <p>Slots</p>
                        </div>

                        <div className={classes.block}>
                            <h4>ESSENTIAL</h4>
                            <p className={classes.bg}>Scheduled launches</p>
                            <p>Workflows</p>
                            <p className={classes.bg}>Scheduled launches</p>
                            <p>Workflows</p>
                            <p className={classes.bg}>Scheduled launches</p>
                        </div>
                    </div>
                    
                    <div className={classes.content}>
                        <div>
                            <p className={classes.bg}>10min per day</p>
                            <p>1 slot</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>10min per day</p>
                            <p>1 slot</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div>
                            <p className={classes.bg}>1h per day</p>
                            <p>5 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>1h per day</p>
                            <p>5 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div>
                            <p className={classes.bg}>3h per day</p>
                            <p>10 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>3h per day</p>
                            <p>10 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div>
                            <p className={classes.bg}>10h per day</p>
                            <p>20 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>10h per day</p>
                            <p>20 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                        </div>
                    </div>

                    <div className={classes.content}>
                        <div>
                            <p className={classes.bg}>60h per day</p>
                            <p>40 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>60h per day</p>
                            <p>40 slots</p>
                        </div>

                        <div className={classes.block}>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                            <p>Soon</p>
                            <p className={classes.bg}>
                                <span className={classes.have}>✓</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.companiesWrapper}>
                    <p>Trusted at companies large and small around the world</p>
                    <div className={classes.companies}>
                        <img src={Adidas.src} alt="Adidas"/>
                        <img src={Airbnb.src} alt="Airbnb"/>
                        <img src={Cisco.src} alt="Cisco"/>
                        <img src={Spotify.src} alt="Spotify"/>
                        <img src={Uber.src} alt="Uber"/>
                        <img src={Zalando.src} alt="Zalando"/>
                    </div>
                </div>
            </div>

            <div className={classes.sec4}>
                <div className={classes.contentWrapper}>
                    <h1>Try it free for 14 days</h1>
                    <h6>Start getting results right now</h6>
                    <button>Try it free</button>
                    <p>No credit card required</p>
                </div>  
            </div>
        </Layout>
    )
}