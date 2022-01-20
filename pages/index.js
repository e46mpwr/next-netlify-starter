import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script src="https://unpkg.com/@croquet/croquet@1.0" />
      </Head>

      <main>
        <Header title="Croquet Dice Rolling Demo Deployed on Netlify" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <script src='/dice.js' />
        <h1 id="diceRoll">0</h1>
        <button id="rollButton">Roll</button>
        
      </main>

      <Footer />
    </div>
  )
}

