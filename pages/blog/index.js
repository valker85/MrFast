import { useState } from 'react'
import { useRouter } from "next/router"
import Layout from '../../components/Layout'
// Styles
import classes from '../../styles/blog.module.css'
// Images
import BlueCircle from '../../src/images/animation-elements/blueCircle.png'
import Cube from '../../src/images/animation-elements/cube.png'
import Egg from '../../src/images/animation-elements/egg.png'
import ThreeCircles from '../../src/images/animation-elements/three-circles.png'
import Cofetti from '../../src/images/animation-elements/сonfetti.png'

import Post1 from '../../src/images/blog/post1.png'
import Post2 from '../../src/images/blog/post2.png'
import Post3 from '../../src/images/blog/post3.png'
import Post4 from '../../src/images/blog/post4.png'
import Post5 from '../../src/images/blog/post5.png'
import Post6 from '../../src/images/blog/post6.png'
import Link from 'next/link'


export default function blog() {
    const router = useRouter()
    const [inputValue, setInputValue] = useState('')
    const posts = {
        top: {
            img: Post1, 
            types:['News'], 
            date: 'Feb 21, 2021', 
            read_duration: '9 min read',
            title: 'How to transform a LinkedIn Search into Emails', 
            text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for magically transforming a LinkedIn search...',
            link: '/blog/post1'
        },
        middle: [
            {
                img: Post2, 
                types:['business'], 
                date: 'Feb 21, 2021', 
                read_duration: '9 min read',
                title: 'How to Export Instagram Followers to Excel', 
                text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for...',
                link: '/blog/post2'
            },
            {
                img: Post3, 
                types:['business'], 
                date: 'Feb 21, 2021', 
                read_duration: '9 min read',
                title: 'How to Export Instagram Followers to Excel', 
                text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for...',
                link: '/blog/post3'
            },
            {
                img: Post4, 
                types:['business'], 
                date: 'Feb 21, 2021', 
                read_duration: '9 min read',
                title: 'How to Export Instagram Followers to Excel', 
                text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for...',
                link: '/blog/post4'
            }
        ],
        bottom: [
            {
                img: Post5, 
                types:['news'], 
                date: 'Feb 21, 2021', 
                read_duration: '9 min read',
                title: 'How to Export Instagram Followers to Excel', 
                text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for...',
                link: '/blog/post5'
            },
            {
                img: Post6, 
                types:['news'], 
                date: 'Feb 21, 2021', 
                read_duration: '9 min read',
                title: 'How to Export Instagram Followers to Excel', 
                text: 'LinkedIn is a great place to find qualified leads, but actually doing something with those leads is tricky If only there was a simple, automated method for...',
                link: '/blog/post6'
            }
        ]
    }

    function inputChange(event) {
        if(event.target.value !== ''){
            setInputValue(event.target.value)
        } else{
            setInputValue('')
        }
    }

    function readPost(link) {
        router.push(link) 
    }

    return(
        <Layout title={'Blog'} secName='Blog' headerColor={'dark'}>
            <div className={classes.sec1}>
                <img className={[classes.egg, 'UpDown-animation2'].join(' ')} src={Egg.src} alt="Animation" />
                <img className={[classes.cube, 'UpDown-animation2'].join(' ')} src={Cube.src} alt="Animation" />
                <img className={[classes.blueCircle, 'UpDown-animation2'].join(' ')} src={BlueCircle.src} alt="Animation" />
                <img className={[classes.confetti, 'UpDown-animation1'].join(' ')} src={Cofetti.src} alt='Animation'/>
                <img className={[classes.threeCircles, 'UpDown-animation1'].join(' ')} src={ThreeCircles.src} alt="Animation" />

                <div className='container'>
                    <h1>Blog</h1>
                    <p>Latest news.</p>
                    <div className={classes.inputWrap}>
                        <input 
                            onChange={(event)=>{inputChange(event)}} 
                            type="text" 
                            name="search" 
                            placeholder='Search'
                            value={inputValue}
                        />
                        <div onClick={()=>{setInputValue('')}} className={inputValue === '' ? classes.clear : [classes.clear, classes.active].join(' ') }>✖</div>
                    </div>
                </div>
            </div>

            <div className={[classes.sec2, 'container'].join(' ')}>
                <div className={classes.top}>
                    <div className={classes.post}>
                        <div onClick={()=>{readPost(posts.top.link)}} className={classes.postImage}>
                            <img src={posts.top.img.src} alt="Post"/>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.types}>
                                {
                                    posts.top.types.map((type, i)=>{
                                        return <div key={i} className={classes.type}>{type}</div>
                                    })
                                } 
                            </div>
                            <span className={classes.info}>{posts.top.date}</span>
                            <span className={classes.info}>{posts.top.read_duration}</span>
                            <h1>{posts.top.title}</h1>
                            <p>{posts.top.text}</p>
                            <Link href={posts.top.link}>Read more</Link>
                        </div>
                    </div>
                </div>

                <div className={classes.middle}>
                    {
                        posts.middle.map((post, i)=>{
                            return(
                            <div key={i} className={classes.post}>
                                <div onClick={()=>{readPost(post.link)}} className={classes.postImage}>
                                    <img src={post.img.src} alt="Post"/>
                                </div>
                                <div className={classes.content}>
                                    <div className={classes.types}>
                                        {
                                            post.types.map((type, i)=>{
                                                return <div key={i} className={classes.type}>{type}</div>
                                            })
                                        } 
                                    </div>
                                    <span className={classes.info}>{post.date}</span>
                                    <span className={classes.info}>{post.read_duration}</span>
                                    <h1>{post.title}</h1>
                                    <p>{post.text}</p>
                                    <Link href={post.link}>Read more</Link>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>

                <div className={classes.bottom}>
                {
                    posts.bottom.map((post, i)=>{
                        return(
                        <div key={i} className={classes.post}>
                            <div onClick={()=>{readPost(post.link)}} className={classes.postImage}>
                                <img src={post.img.src} alt="Post"/>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.types}>
                                    {
                                        post.types.map((type, i)=>{
                                            return <div key={i} className={classes.type}>{type}</div>
                                        })
                                    } 
                                </div>
                                <span className={classes.info}>{post.date}</span>
                                <span className={classes.info}>{post.read_duration}</span>
                                <h1>{post.title}</h1>
                                <p>{post.text}</p>
                                <Link href={post.link}>Read more</Link>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>

            <div className={classes.sec3}>
                <div className={classes.subscribe}>
                    <h1>Subscribe to us</h1>
                    <p>Get the latest posts delivered right to your inbox</p>
                    <input type="email" name="email" placeholder='Enter your email'/>
                    <button>Try it free</button>
                </div>
            </div>
        </Layout>
    )
}