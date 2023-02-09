import Layout from '../../components/Layout'
// Styles
import classes from '../../styles/blogPost.module.css'
// Images
import Background from '../../src/images/BlogPost/bg.svg'
import Link from 'next/link'
import Post2 from '../../src/images/blog/post2.png'
import Post3 from '../../src/images/blog/post3.png'
import Post4 from '../../src/images/blog/post4.png'

export default function blogPost() {
    const post = {
        img: Background,
        headerColor: 'dark',
        title: 'How to Export Instagram Followers to Excel',
        generalType: 'Business',
        types: ['workflow automation', 'Business'],
        date: 'Feb 21, 2021', 
        read_duration: '8 minutes read',
        post_content: {}
    }
    const latest = [
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
    ]



    return(
        <Layout title={'Post Name'} secName='BlogPost' headerColor={post.headerColor}>
            <div className={classes.postImg}>
                <img src={Background.src} alt="Automatr"/>
            </div>

            <div className={classes.sec1}>
                <div className={classes.navigation}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li>{post.generalType}</li>
                    </ul>
                </div>

                <div className={classes.content}>
                    <h1 className={classes.title}>{post.title}</h1>
                    <div className={classes.types}>
                        <ul>
                            <li>{post.generalType}</li>
                        </ul>
                        <ul className={classes.otherTypes}>
                            {
                                post.types.map((type, i)=>{
                                    return <li key={i}>{type}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={classes.info}>
                        <p>{post.date}</p>
                        <p>{post.read_duration}</p>
                    </div>
                    {/* ******** Content from server ******** */}
                    <div>
                        
                    </div>
                    {/* ******** ******************* ******** */}
                </div>
            </div>

            <div className={[classes.sec2, 'container'].join(' ')}>
                <h1 className={classes.latestTitle}>Latest Articles</h1>

                <div className={classes.latest}>
                    {
                        latest.map((post, i)=>{
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