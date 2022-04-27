import '../styles/globals.css'
<<<<<<< HEAD

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
=======
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>

  )
>>>>>>> ff2f26ce2c3507a0e3e9d87df163730a95c27f15
}

export default MyApp
