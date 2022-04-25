import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
    {/* Head */}
    <Head>
      <title>Parasol</title>
      <meta name='description' content='A meditation app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    {/* Header */}
    <Header />
    {/* Body */}
    <Hero />
    {/* Footer */}
    </div>
  )
}
