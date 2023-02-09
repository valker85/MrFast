import { useState } from 'react'
import Layout from '../components/Layout'
// Styles
import classes from '../styles/faq.module.css'
// Images
import BlueCircle from '../src/images/animation-elements/blueCircle.png'
import Cube from '../src/images/animation-elements/cube.png'
import Egg from '../src/images/animation-elements/egg.png'
import ThreeCircles from '../src/images/animation-elements/three-circles.png'
import Cofetti from '../src/images/animation-elements/сonfetti.png'
import Link from 'next/link'

export default function faq() {
    const [answers, setAnswers] = useState([
        {question: 'Does Mr. Fast provide Captcha solvers?', answer: 'Sure! Mr.Fast has captcha solvers to block robots and ensure the smooth working process for the automation.'},
        {question: 'How do you estimate the execution time for automation?', answer: 'It is estimated starting from launch to getting the result. Afterwards, all the work done during the day is being aggregated, which resets during every 24 hours.'},    
        {question: 'What is the automation limit?', answer: 'Sure! Mr.Fast has captcha solvers to block robots and ensure the smooth working process for the automation Automation limit defines the number of different automations you can use in 24 hours.'},    
        {question: 'What is workflow?', answer: 'Workflow is the process of connecting several automations and using the result of one automation to make the other one work.'},    
        {question: 'What is file storage?', answer: 'File storage is the storage available for each user where all the files are stored. For example, when a particular user runs an automation and gets the result, the latter is stored in his/her personal file storage, which can be used anytime anywhere.'}
    ])
    
    function toggleQuestion (event) {
        event.target.className === classes.plus 
        ? event.target.className = classes.minus
        : event.target.className = classes.plus
    }

    return(
    <Layout title={'FAQ'} secName='Faq' headerColor={'dark'}>
        <div className={classes.sec1}>
            <img className={[classes.egg, 'UpDown-animation2'].join(' ')} src={Egg.src} alt="Animation" />
            <img className={[classes.cube, 'UpDown-animation2'].join(' ')} src={Cube.src} alt="Animation" />
            <img className={[classes.blueCircle, 'UpDown-animation2'].join(' ')} src={BlueCircle.src} alt="Animation" />
            <img className={[classes.confetti, 'UpDown-animation1'].join(' ')} src={Cofetti.src} alt='Animation'/>
            <img className={[classes.threeCircles, 'UpDown-animation1'].join(' ')} src={ThreeCircles.src} alt="Animation" />

            <h1>Frequently asked questions</h1>
        </div>

        <div className={[classes.sec2, 'container'].join(' ')}>
            <ul>
                {
                    answers.map(({question, answer}, index)=>{
                        return( 
                        <li key={index}>
                            <div className={classes.answerBlock}>
                                <h4 className={classes.plus} onClick={(event)=>toggleQuestion(event)}>{question}</h4>
                                <p>{answer}</p>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>

            <div className={classes.more}>
                <h2>Need more help?</h2>
                <p>If you couldn't find an answer to your question, please use one of these options</p>
                <div className={classes.help}>
                    <div className={classes.offer}>
                        <h3>Live Chat</h3>
                        <p>Help us make your experience better. We’re always here for you.</p>
                        <Link href='/faq'>Go to Live Chat</Link>
                    </div>
                    <div className={classes.offer}>
                        <h3>Contact Support</h3>
                        <p>Tell us about your problem by sending an email to support team.</p>
                        <Link href='/faq'>Get Help</Link>
                    </div>
                    <div className={classes.offer}>
                        <h3>Submit a Ticket</h3>
                        <p>We’re ready to answer your questions 24/7.</p>
                        <Link href='/faq'>Submit</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}