import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout( {children, title = 'We value your time', secName, headerColor = 'white'} ) {
  
  return (
    <>
      <Head>
        <title>Automatr | {title}</title>  
        <meta name="keywords" content="time, marketing, automation, fast"/>
        <meta name="description" content="We value your time"/> 
        <meta charSet="utf-8"/>
      </Head>
      <Header headerColor={headerColor === 'dark' ? '#202226' : headerColor} />
      <div className={secName}>
        {children}
      </div>
      <Footer/>
    </>
  )
}
