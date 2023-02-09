import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
// Components
import Layout from '../components/Layout'
// CSS
import classes from '../styles/home.module.css'
// Images
import fourCircles from '../src/images/animation-elements/four-circles.png'
import cardImg from '../src/images/home/linkedin.png'
import Confetti from '../src/images/animation-elements/сonfetti.png'
import Phone from '../src/images/home/phone.png'
import Message from '../src/images/home/message.svg'

// Slick-Slider Arrows
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, fontSize: '0px' }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, fontSize: '0px' }}
      onClick={onClick}
    />
  );
}

export default function Home() {
  const [agree, setAgree] = useState(false)
  const tabsContent = [
    {
      type: 'Instagram',
      cards: [
        {
          img: cardImg,
          title: 'Instagram',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Instagram',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Instagram',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Instagram',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Instagram',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        }
      ]
    },
    {
      type: 'Facebook',
      cards: [
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Facebook',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        }
      ]
    },
    {
      type: 'Linkedin',
      cards: [
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      {
        img: cardImg,
        title: 'LinkedIn Network Booster',
        body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
        link: '/'
      },
      ]
    },
    {
      type: 'Twitter',
      cards: [
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Twitter',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        }
      ]
    },
    {
      type: 'Google',
      cards: [
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        },
        {
          img: cardImg,
          title: 'Google',
          body: 'Automatically send invitations and connect to a list of LinkedIn users with a personalized message.',
          link: '/'
        }
      ]
    }
  ]
  const [activeTab, setActiveTab] = useState(tabsContent[0].type)
  const [activeTabContent, setActiveTabContent] = useState(tabsContent[0].cards)
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul> 
          {dots} 
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "fit-content",
          color: "#4556CF",
          fontWeight: '900'
        }}
      >
        0{i + 1}
      </div>
    )
  }

  function changeTab(tab) {
    setActiveTab(tab.type)
    setActiveTabContent(tab.cards)
  }

  return (
    <Layout title={'Home'} secName='home'>
      <div className={classes.sec1}>
        <div className={classes.secWrapper}>
          <div className='container'>
            <h1 className={classes.title}>Automate Actions and<br/>Extract Data with<br/>No-coding Knowledge</h1>
            <h2 className={classes.name}>Mr.Fast</h2>
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
      </div>
      
      <div className={[classes.sec2, 'container'].join(' ')}>
        <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
        <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
        <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
        <Image src={fourCircles} width={157} height={92} alt='Automatr' className={[classes.imgAnim1, 'UpDown-animation2'].join(' ')}/>
        <div className={[classes.c4, 'UpDown-animation1'].join(' ')}></div>
        <div className={[classes.c5, 'UpDown-animation2'].join(' ')}></div>

        <div className={classes.contentWrapper}>
          <div className={classes.block}>
            <h1>How it works</h1>
            <p>With Mr.Fast you can turn any website into a source of information.</p>
            <p>Mr.Fast will extract the needed data from the website on the user's behalf.</p>
          </div>
          <div className={classes.block}></div>
          <div className={classes.block}>
            <h2>use our action automations</h2>
            <p>Auto-follow, auto-connect profiles and auto-like posts in<br/>all social media platforms.</p>
          </div>
          <div className={classes.block}>
            <h2>make your own automation</h2>
            <p>Create your automation with Mr. Fast and share it<br/>with the community.</p>
          </div>
          <div className={classes.block}>
            <h2>make your own automation</h2>
            <p>Create your automation with Mr. Fast and share it<br/>with the community.</p>
          </div>
          <div className={classes.block}>
            <h2>run automations in the cloud</h2>
            <p>Our automations run in the cloud, 24/7.</p>
          </div>
        </div>
      </div>

      <div className={classes.sec3}>
        <div className={[classes.c1, 'UpDown-animation2'].join(' ')}></div>
        <div className={[classes.c2, 'UpDown-animation1'].join(' ')}></div>
        <Image src={Confetti} width={65} height={65} alt='Automatr' className={[classes.imgAnim2, 'UpDown-animation2'].join(' ')}/>
        <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>

        <div className={[classes.secWrapper, 'container'].join(' ')}>
          <h1 className={classes.title}>Automate<br/>simple actions</h1>
          <div className={classes.tabs}>
            <ul>
              {
                tabsContent.map((tab, i)=>{
                  return <li 
                    onClick={()=>changeTab(tab)}
                    className={activeTab === tab.type ? classes.active : ''} 
                    key={i}>
                    {tab.type}
                  </li>
                })
              }
            </ul>
          </div>
          <div className={classes.tabsContent}>
          {
            activeTabContent.map((card, i)=>{
              return(
                <div key={i} className={classes.card}>
                  <Image src={cardImg} width={45} height={45} alt='Automatr'/>
                  <h1>{card.title}</h1>
                  <p>{card.body}</p>
                  <Link href={card.link}>use this</Link>
                </div>
              )
            })
          }
          </div>

        </div>

      </div>

      <div className={[classes.sec4, 'container'].join(' ')}>
        <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>

        <div className={classes.left}>
          <Image src={Phone} alt='Automatr' width={'26.77vw'} height={'100%'} />

          <h3>Collect data from Linkedin profiles</h3>
          <p>LinkedIn scraper will collect every data from a list of LinkedIn profiles, including emails! Start scraping LinkedIn now!</p>
        </div>

        <div className={classes.right}>
          <h1>Create effective workflows</h1>

          <div className={classes.blocksWrapper}>
            <div className={classes.blockWrap}>
              <div className={classes.block}>
                <h2>Input</h2>
                <p>Find target companies</p>
              </div>
            </div>
            <div className={classes.block}>
              <div className={classes.top}>
                <img src={cardImg.src} alt='Automatr' />
                <span>→</span>
                <h2>csv</h2>
              </div>
              <p>Find target companies</p>
            </div>
            <div className={classes.block}>
              <div className={classes.top}>
                <img src={cardImg.src} alt='Automatr' />
                <span>→</span>
                <h2>csv</h2>
              </div>
              <p>Find target companies</p>
            </div>
            <div className={classes.block}>
              <div className={classes.top}>
                <img src={cardImg.src} alt='Automatr' />
                <span>→</span>
                <h2>csv</h2>
              </div>
              <p>Find target companies</p>
            </div>
            <div className={classes.blockWrap}>
              <div className={classes.block}>
                <h2>Output</h2>
                <p style={{color: '#202226'}}>All the public data about the resulting LinkedIn users, their companies, and their professional email addresses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={['home-section5-slider', classes.sec5].join(' ')}>
        <div className={classes.sliderWrapper}>
          <Slider {...settings}>

            <div>
              <div className={classes.slideWrap}>
                <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
                <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c4, 'UpDown-animation2'].join(' ')}></div>
                <div className={classes.peopleSayWrap}>
                  <p>What people say</p>
                  <img src={Message.src} alt="Message"/>
                </div>
                <div className={classes.slideContent}>
                  <div className={classes.top}>
                    <span>“</span>
                    <h5>The product of Mr. Fast is one of the exceptional products in this program (“From Idea to Business” teleshow) that has the potential to become a successful startup on an international level. I wish you the best in your future endeavors.</h5>
                  </div>
                  <div className={classes.bottom}>
                    <p>Artavazd Minasyan</p>
                    <p>Co-founder & President at Krisp</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.slideWrap}>
                <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
                <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c4, 'UpDown-animation2'].join(' ')}></div>
                <div className={classes.peopleSayWrap}>
                  <p>What people say</p>
                  <img src={Message.src} alt="Message"/>
                </div>
                <div className={classes.slideContent}>
                  <div className={classes.top}>
                    <span>“</span>
                    <h5>The product of Mr. Fast is one of the exceptional products in this program (“From Idea to Business” teleshow) that has the potential to become a successful startup on an international level. I wish you the best in your future endeavors.</h5>
                  </div>
                  <div className={classes.bottom}>
                    <p>Artavazd Minasyan</p>
                    <p>Co-founder & President at Krisp</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.slideWrap}>
                <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
                <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c4, 'UpDown-animation2'].join(' ')}></div>
                <div className={classes.peopleSayWrap}>
                  <p>What people say</p>
                  <img src={Message.src} alt="Message"/>
                </div>
                <div className={classes.slideContent}>
                  <div className={classes.top}>
                    <span>“</span>
                    <h5>The product of Mr. Fast is one of the exceptional products in this program (“From Idea to Business” teleshow) that has the potential to become a successful startup on an international level. I wish you the best in your future endeavors.</h5>
                  </div>
                  <div className={classes.bottom}>
                    <p>Artavazd Minasyan</p>
                    <p>Co-founder & President at Krisp</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.slideWrap}>
                <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
                <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c4, 'UpDown-animation2'].join(' ')}></div>
                <div className={classes.peopleSayWrap}>
                  <p>What people say</p>
                  <img src={Message.src} alt="Message"/>
                </div>
                <div className={classes.slideContent}>
                  <div className={classes.top}>
                    <span>“</span>
                    <h5>The product of Mr. Fast is one of the exceptional products in this program (“From Idea to Business” teleshow) that has the potential to become a successful startup on an international level. I wish you the best in your future endeavors.</h5>
                  </div>
                  <div className={classes.bottom}>
                    <p>Artavazd Minasyan</p>
                    <p>Co-founder & President at Krisp</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.slideWrap}>
                <div className={[classes.c1, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c2, 'UpDown-animation2'].join(' ')}></div>
                <div className={[classes.c3, 'UpDown-animation1'].join(' ')}></div>
                <div className={[classes.c4, 'UpDown-animation2'].join(' ')}></div>
                <div className={classes.peopleSayWrap}>
                  <p>What people say</p>
                  <img src={Message.src} alt="Message"/>
                </div>
                <div className={classes.slideContent}>
                  <div className={classes.top}>
                    <span>“</span>
                    <h5>The product of Mr. Fast is one of the exceptional products in this program (“From Idea to Business” teleshow) that has the potential to become a successful startup on an international level. I wish you the best in your future endeavors.</h5>
                  </div>
                  <div className={classes.bottom}>
                    <p>Artavazd Minasyan</p>
                    <p>Co-founder & President at Krisp</p>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>

      <div className={classes.sec6}>
        <div className={classes.contentWrapper}>
          <h1>Try it free for 14 days</h1>
          <h6>Accelerate your working process</h6>
          <button>Try it free</button>
          <p>No credit card required</p>
        </div>  
      </div>
    </Layout>
  )
}