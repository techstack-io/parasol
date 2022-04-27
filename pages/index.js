import Head from 'next/head'
<<<<<<< HEAD
import Header from '../components/Header'
import Hero from '../components/Hero'

=======
import Link from 'next/link'
import Hero from '../components/Hero'


>>>>>>> ff2f26ce2c3507a0e3e9d87df163730a95c27f15
export default function Home() {
  return (
    <div>
    {/* Head */}
    <Head>
      <title>Parasol</title>
      <meta name='description' content='A meditation app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
<<<<<<< HEAD

    {/* Header */}
    <Header />
    {/* Body */}
    <Hero />
    {/* Footer */}
=======
    <Hero />
>>>>>>> ff2f26ce2c3507a0e3e9d87df163730a95c27f15
    </div>
  )
}
