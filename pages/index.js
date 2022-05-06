import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import dojos from '../data/dojos.json'
import Banner from '../components/Banner'

export async function getStaticProps(context) {
  return {
    props: {
      dojos,
    }, 
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log('Banner Button')
  }
  console.log('props', props);
  return (
    <>
    {/* Head */}
    <Head>
      <title>Parasol</title>
      <meta name='description' content='A meditation app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* Banner */}
    <Banner buttonText='Find Meditation' handleOnClick={handleOnBannerBtnClick} />
    
    </>
  )
}
