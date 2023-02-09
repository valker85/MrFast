import { createRef, useCallback, useEffect, useState } from 'react'
import Link from "next/link";
import Layout from '../../components/Layout.js'
// Styles
import classes from '../../styles/store.module.css'
// Images
import BlueCircle from '../../src/images/animation-elements/blueCircle.png'
import Cube from '../../src/images/animation-elements/cube.png'
import Egg from '../../src/images/animation-elements/egg.png'
import ThreeCircles from '../../src/images/animation-elements/three-circles.png'
import Whirligig from '../../src/images/animation-elements/whirligig.png'
import Cofetti from '../../src/images/animation-elements/сonfetti.png'
import Linkedin from '../../src/images/store/Linkedin.png'
import Other from '../../src/images/store/other.png'
import Linin from '../../src/images/store/linin.svg'

export default function Store() {
  const [activeUrl, setActiveUrl] = useState('')
  const [activeTab, setActiveTab] = useState('Actions')
  const [tabsContent, setTabsContent] = useState([])
  const [activePlatformObj, setActivePlatformObj] = useState({})
  const [otherContent, setOtherContent] = useState( [
    {images: Other, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
    {images: Other, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
    {images: Other, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
  ])

  const platforms = [
    {
      name: 'Linkedin',
      url: 'linkedin',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'LinkedIn Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
    },
    {
      name: 'Instagram',
      url: 'instagram',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Instagram Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    },
    {
      name: 'Twitter',
      url: 'twitter',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Twitter Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    },
    {
      name: 'Email',
      url: 'email',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Email Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    },
    {
      name: 'Facebook',
      url: 'facebook',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Facebook Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    },
    {
      name: 'Google',
      url: 'google',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Google Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    },
    {
      name: 'Other',
      url: 'other',
      menuImage: Linin,
      actions: [
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ],
      extractions: [
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'},
        {images: Linkedin, title: 'Other Network Booster', text: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.', link: '/automations/linkedin'}
      ]
    }
  ]

  function setActiveLi(platform) {
    if(activeTab === 'Actions'){
      setTabsContent(platform.actions)
      setActivePlatformObj(platform)
    } else if(activeTab === 'Extractions'){
      setTabsContent(platform.extractions)
      setActivePlatformObj(platform)
    }
  }

  function changeActiveTab(tab) {
    setActiveTab(tab)
    if(tab === 'Actions'){
      setTabsContent(activePlatformObj.actions)
    } else if(tab === 'Extractions'){
      setTabsContent(activePlatformObj.extractions)
    }
  }

  

  useEffect(() => {
    platforms.map((platform)=>{
      if(window.location.pathname.split('/')[2] === platform.url){
        setTabsContent(platform.actions)
        setActivePlatformObj(platform)
        setActiveUrl(window.location.pathname)
      }
    })
  },[])

  useCallback(()=>{
    console.log('Changed')
  }, [activeUrl])

  return(
  <Layout title={'Store'} secName='store'>
    <div className={classes.sec1}>
      <img className={[classes.confetti, 'UpDown-animation1'].join(' ')} src={Cofetti.src} alt='Animation'/>
      <div className={[classes.c1, 'UpDown-animation2'].join(' ')}></div>
      <div className={[classes.c2, 'UpDown-animation1'].join(' ')}></div>
      <div className={[classes.c3, 'UpDown-animation2'].join(' ')}></div>
      <div className={[classes.c4, 'UpDown-animation1'].join(' ')}></div>
      <div className={[classes.c5, 'UpDown-animation2'].join(' ')}></div> 
      <div className={[classes.c6, 'UpDown-animation2'].join(' ')}></div> 
      <div className={[classes.c7, 'UpDown-animation2'].join(' ')}></div> 
      <div className={[classes.c8, 'UpDown-animation1'].join(' ')}></div> 
      <div className={classes.text}>
          <h1>Mr. Fast store</h1>
          <p>Mr. Fast store provides the tools to do your work more efficiently without having coding knowledge. Choose from our 100+ automations to extract data from different websites or automate your actions.</p>
      </div>
      <div className={classes.planetWrap}>
          <img className={classes.whirligig} src={Whirligig.src} alt="Animation" />
          <img className={classes.cube} src={Cube.src} alt="Animation" />
          <img className={classes.egg} src={Egg.src} alt="Animation" />
          <img className={classes.blueCircle} src={BlueCircle.src} alt="Animation" />
          <img className={classes.threeCircles} src={ThreeCircles.src} alt="Animation" />
          <div className={classes.planet}></div>
      </div>
    </div>
    <div className={['container', classes.sec2].join(' ')}>
      <div className={classes.submenu}>
        <ul>
          {
            platforms.map((platform, id)=>{
              return <li
                onClick={()=>setActiveLi(platform)}
                className={activePlatformObj.name === platform.name ? classes.active : ''} 
                key={id}
              >
                <img src={platform.menuImage.src} />
                <Link href={`/automations/${platform.url}`}>
                  {platform.name}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
      <div className={classes.offers}>
          <h1 className={classes.title}>Featured</h1>
          <div className={classes.tabs}>
            <button onClick={()=> changeActiveTab('Actions')} className={activeTab === 'Actions' ? classes.active : ''}>Actions</button>
            <button onClick={()=> changeActiveTab('Extractions')} className={activeTab === 'Extractions' ? classes.active : ''}>Extractions</button>
          </div>
          <div className={classes.extantions_count}>
            <p>{tabsContent.length} Automations</p>
          </div>
          <div className={classes.tabs_content}>
            {
              tabsContent.map((card, id)=>{
                return <div key={id} className={classes.card}>
                  <img src={card.images.src} alt='Automatr'/>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link href={card.link}>use this</Link>
                </div>
              })
            }
          </div>
          <div className={classes.other}>
            <h1 className={classes.title}>Other</h1>
            <div className={classes.tabs_content}>
              {
                otherContent.map((card, id)=>{
                  return <div key={id} className={classes.card}>
                    <img src={card.images.src} alt='Automatr'/>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <Link href={card.link}>use this</Link>
                  </div>
                })
              }
            </div>
          </div>
      </div>
    </div>
  </Layout>
  )
}