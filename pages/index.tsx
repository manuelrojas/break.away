import Head from 'next/head'
import Header from './components/header'
import Main from './components/main'
import List from './components/list'
import NewsletterSubscribe from './components/suscribe'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Break.away</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <List />
      <NewsletterSubscribe />
    </div>
  )
}
