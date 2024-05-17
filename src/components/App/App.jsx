import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import LogosRow from '../LogosRow/LogosRow'
import Reassurance from '../Reassurance/Reassurance'
import Testimony from '../Testimony/Testimony'


function App() {

  return (

    <div id="app">
      <Header />


      <main>
        <Hero />

        {/* <LogosRow /> */}
        <Banner />

        <Reassurance />
        <Testimony />
      </main>
    </div>
  )
}

export default App
