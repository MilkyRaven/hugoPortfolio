import Head from 'next/head'
import Hi from '../../components/Hi'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Typing from '../../components/Typing'
import DataAnalytics from '../../components/landing-page/DataAnalytics'
import Design from '../../components/landing-page/Design'
import Photography from '../../components/landing-page/Photography'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <>
      <Head>

        <title>Hugo Portfolio</title>
        {/* <meta name="description" content="Developed by Milky Kiwi, designed by Gabi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Hi></Hi>
        <Nav></Nav>
        {/* Welcome Section */}
        <Header></Header>
        {/* <Typing></Typing> */}
        {/* Data Analytics */}
        <DataAnalytics></DataAnalytics>
        {/* Design */}
        <Design></Design>
        {/* Photography */}
        <Photography></Photography>
        <Footer></Footer>
      </main>
    </>
  )
}
