import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
