import { Suspense } from 'react'
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Cards from './components/HomePage/Cards/Cards'
import Success from './components/HomePage/Success/Success'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import Steps from './components/HomePage/Steps/Steps'
import Pricing from './components/HomePage/Pricing/Pricing'

const fetchCard = async () => {
  const res = await fetch("/cardData.json");
  return res.json()
}

const fetchStep = async () => {
  const res = await fetch("/stepData.json")
  return res.json()
}

const fetchPrice = async () => {
  const res = await fetch("/pricingData.json")
  return res.json()
}

function App() {

  const cardsPromise = fetchCard();
  const stepsPromise = fetchStep();
  const pricingPromise = fetchPrice();

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
      <Suspense fallback={
        <span className="loading loading-ball loading-xl"></span>
      }>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
      <Suspense fallback={
        <span className="loading loading-ball loading-xl"></span>
      }>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <ToastContainer />
    </>
  )
}

export default App
