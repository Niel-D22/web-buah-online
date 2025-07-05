import React from 'react'
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import WhereToBuy from './components/WhereToBuy/WhereToBuy.jsx';
import AppBanner from './components/AppBanner/AppBanner.jsx';
import Footer from './components/Footer/Footer.jsx';

export const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Service/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </main>
  )
}
export default App;