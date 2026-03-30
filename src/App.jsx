import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="px-5">
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
