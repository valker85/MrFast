import Layout from '../../components/Layout'
import Link from 'next/link'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
// Styles
import classes from '../../styles/login.module.css'
// Images
import Human from '../../src/images/home/human.png'

export default function Login() {

    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }


    return(
        <Layout title={'Log in'} secName='Login' headerColor={'dark'}>
            <div className={classes.section}>
                <img className={classes.bg} src={Human.src} alt="automatr"/>
                <h1>Log in</h1>
                <div className={classes.inputsWrapper}>
                    <div className={classes.inputs}>
                        <input type="mail" name="mail" placeholder='Enter your email'/>
                        <div className={classes.line}></div>
                        <input type="password" name="password" placeholder='Password'/>
                    </div>
                    <button>Log in</button>
                </div>
                <div className={classes.help}>
                    <p className={classes.haveAcc}>Don't have an account yet? <Link href='/signup'>Sign Up</Link></p>
                    <Link className={classes.forgotPass} href='/login/password'>Forgot password?</Link>
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
        </Layout>
    )
}