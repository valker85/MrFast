import Layout from '../../../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
// Styles
import classes from '../../../styles/login.module.css'
// Images
import Human from '../../../src/images/home/human.png'

export default function Password() {
    const [page, setPage] = useState(0)
    
    function screenOne() {
        return(
        <div className={[classes.section, classes.passSection].join(' ')}>
            <img className={classes.bg} src={Human.src} alt="automatr"/>

            <h1>Password recovery</h1>
            <p className={classes.passInfo}>Enter the email associated with your account and we’ll send an email with instructions to reset your password.</p>
            <div className={classes.inputsWrapper}>
                <div className={classes.inputs}>
                    <input className={classes.passInput} type="mail" name="mail" placeholder='Enter your email'/>
                </div>
            </div>
            <div className={classes.btnsWrapper}>
                <Link href='/login'><button className={classes.previous}>Back</button></Link>
                <button onClick={()=>setPage(1)} className={classes.signUp}>Send</button>
            </div>
        </div>
        )
    }

    function screenTwo() {
        return(
        <div className={[classes.section, classes.mailCheck].join(' ')}>
            <img className={classes.bg} src={Human.src} alt="automatr"/>

            <h1>Check your email</h1>

            <p className={classes.mailCheckInfo}>We have sent a password recover instructions tou your email.</p>
            <p className={classes.mailCheckInfo}>Did not recieve the email? Check your spam filter, or <span onClick={()=>setPage(0)}>try another email address.</span></p>

        </div>
        )
    }

    function changeScreen(num) {
        if(num === 0){
            return screenOne()
        } else if(num === 1) {
            return screenTwo()
        }
    }

    return(
        <Layout title={'Log in'} secName='Login' headerColor={'dark'}>
            {changeScreen(page)}
        </Layout>
    )
}