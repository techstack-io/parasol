import Head from 'next/head'
import Link from 'next/link'
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
    <Hero />
    </div>
  )
}
