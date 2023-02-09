import { useState } from 'react'
import Layout from '../components/Layout'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
// Styles
import classes from '../styles/signup.module.css'
// Images
import Human from '../src/images/home/human.png'
import Illustration from '../src/images/signup/Illustration.png'

export default function Signup() {
    const [agree, setAgree] = useState(false)
    const [page, setPage] = useState(0)
    const [selectActive, setSelectActive] = useState(false)
    const [selectValue, setSelectValue] = useState('Your job title')

    const jobTitles = ['Marketing specialist', 'Recruiter', 'Sales manager', 'Developer', 'Product owner', 'Researcher', 'Other']
    
    const responseFacebook = (response) => {
        console.log(response);
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    function setJobTitle(jobTitle) {
        setSelectValue(jobTitle)
        setSelectActive(false)
    }

    function screenOne() {
        return(
        <div className={[classes.section, classes.sectionOne].join(' ')}>
            <img className={classes.bg} src={Human.src} alt="automatr"/>
            <h1>Sign up</h1>
            <div className={classes.inputsWrapper}>
                <div className={classes.inputs}>
                    <input type="mail" name="mail" placeholder='Enter your email'/>
                    <div className={classes.line}></div>
                    <input type="password" name="password" placeholder='Password'/>
                </div>
                <button onClick={()=>setPage(1)}>Join</button>
            </div>
            <div onClick={()=>setAgree(!agree)} className={classes.agree}>
                <div className={[classes.agreeBox, agree && classes.submit].join(' ')}></div>
                <p>I agree to the processing and use of my personal data</p>
            </div>
            <div className={classes.social}>
                <h4>or continue with social media</h4>

                <div className={classes.socialWrapper}>
                    <div className={classes.fb}>
                        <FacebookLogin
                            appId="1088597931155576"
                            callback={responseFacebook}
                            render={renderProps => (
                                <button className={classes.facebookBtn} onClick={renderProps.onClick}></button>
                            )}
                        />
                    </div>
                    <div>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            render={renderProps => (
                            <button className={classes.googleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>                        
                </div>
            </div>
        </div>
        )
    }

    function screenTwo() {
        return(
        <div className={[classes.section, classes.sectionTwo].join(' ')}>
            <img className={classes.bg} src={Illustration.src} alt="automatr"/>
            <h1>Personal data</h1>
            <div className={classes.inputsWrapper}>
                <div className={classes.inputs}>
                    <input type="text" name="firstname" placeholder='First name *'/>
                    <div className={classes.line}></div>
                    <input type="text" name="lastname" placeholder='Last name *'/>
                </div>
            </div>
            <div className={classes.inputsWrapper}>
                <div className={classes.inputs}>
                    <input type="text" name="companyName" placeholder='Your company name *'/>
                    <div className={classes.line}></div>
                    <div className={classes.selectWrapper}>
                        <div onClick={()=>setSelectActive(!selectActive)} className={classes.select}>
                            <p className={classes.selCntry}>{selectValue}</p>
                            <p className={[classes.arrow, selectActive ? classes.active : ''].join(' ')}>›</p>
                        </div>

                        <ul className={[classes.jobTitles, selectActive ? classes.active : ''].join(' ')}>
                            {
                                jobTitles.map((jobTitle, i)=>{
                                    return <li className={selectValue === jobTitle ? classes.active : ''} onClick={()=>setJobTitle(jobTitle)} key={i}>{jobTitle}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.btnsWrapper}>
                <button onClick={()=>setPage(0)} className={classes.previous}>Previous</button>
                <button onClick={()=>setPage(2)} className={classes.signUp}>Sign up</button>
            </div>
        </div>
        )
    }

    function screenThree() {
        return(
        <div className={[classes.section, classes.sectionThree].join(' ')}>
            <img className={classes.bg} src={Illustration.src} alt="automatr"/>
            <h1>Email verification</h1>
            <p>Successfully verified email.</p>
        </div>
        )
    }

    function changeScreen(num) {
        if(num === 0){
            return screenOne()
        } else if(num === 1) {
            return screenTwo()
        } else if(num === 2){
            return screenThree()
        }
    }

    return(
        <Layout title={'Sign Up'} secName='SignUp' headerColor={'dark'}>
            {changeScreen(page)}
        </Layout>
    )
}