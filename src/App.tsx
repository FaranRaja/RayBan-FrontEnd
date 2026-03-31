import Hero1 from './components/hero/Hero1'
import Nav from './components/navbar/Nav'
import Notif from './components/notification/Notif'
import Notif2 from './components/notification/Notif2'


function App() {
  

  return (
    <div>
      
      <header>
        <Notif />
        <Nav />
        <Notif2 />
        <Hero1  />
      </header>
      
    </div>
  )
}

export default App
