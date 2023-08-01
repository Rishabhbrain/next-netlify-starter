import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rish_Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Rishabh Modi" />
        <p className="description">
          Web Developer <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
