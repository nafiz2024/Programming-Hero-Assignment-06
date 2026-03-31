import { Suspense } from 'react'
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Cards from './components/HomePage/Cards/Cards'
import Success from './components/HomePage/Success/Success'
import Navbar from './components/Navbar/Navbar'

const fetchCard = async () => {
  const res = await fetch("/public/cardData.json");
  return res.json()
}

function App() {

  const cardsPromise = fetchCard();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Success></Success>
      <Suspense fallback={
        <span className="loading loading-ball loading-xl"></span>
      }>
        <Cards cardsPromise={cardsPromise}></Cards>
      </Suspense>
    </>
  )
}

export default App
