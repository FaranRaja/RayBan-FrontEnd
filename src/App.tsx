import Hero1 from './components/hero/Hero1'
import Hero2 from './components/hero/Hero2'
import Nav from './components/navbar/Nav'
import Notif from './components/notification/Notif'
import Collection from './components/collection/Collection'
import Notif2 from './components/notification/Notif2'


function App() {
  

  return (
    <div>
      
      <header>
        <Notif />
        <Nav />
        <Notif2 />
        <Hero1  />
        <Hero2 />
        <Collection />
      </header>
      
    </div>
  )
}

export default App
