import Layout from '../../../components/Layout'
import Link from 'next/link'
import { useState } from 'react'
// Styles
import classes from '../../../styles/login.module.css'
// Images
import Human from '../../../src/images/home/human.png'
import EyeOff from '../../../src/images/icons/eye-off.svg'

export default function Password() {
    const [passType, setPassType] = useState('password')

    function showPass() {
        passType === 'password'
        ? setPassType('text')
        : setPassType('password')
    }

    return(
        <Layout title={'Log in'} secName='Login' headerColor={'dark'}>
            <div className={[classes.section, classes.createPass].join(' ')}>
                <img className={classes.bg} src={Human.src} alt="automatr"/>
                <h1>Create new password</h1>
                <p className={classes.createPassInfo}>Your new password must be different from previous used passwords.</p>
                <div className={classes.inputsWrapper}>
                    <div className={classes.inputs}>
                        <input className={classes.eyeoffInput} type={passType} name="password" placeholder='New password *'/>
                        <img onClick={()=>showPass()} className={classes.eyeoff} src={EyeOff.src} alt="EyeOff"/>
                        <div className={classes.line}></div>
                        <input type={passType} name="password" placeholder='Confirm new password *'/>
                    </div>
                    <button className={classes.submitBtn}>Reset password</button>
                </div>
            </div>
        </Layout>
    )
}