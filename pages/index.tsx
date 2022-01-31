import Head from 'next/head'
import Header from './components/header'
import Main from './components/main'
import List from './components/list'
import NewsletterSubscribe from './components/suscribe'
import Banner from './components/banner'
import Footer from './components/footer'
import Fade from 'react-reveal/Fade'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Break.away</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <h1 className="text-break.away-blue  text-3xl md:text-4xl text-center mt-10">
        Próximamente...
      </h1>
      <List />
      <Banner />
      <NewsletterSubscribe />
      <Footer />

    </div>
  )
}
