import React from 'react'
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import WhereToBuy from './components/WhereToBuy/WhereToBuy.jsx';
import AppBanner from './components/AppBanner/AppBanner.jsx';
import Footer from './components/Footer/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';



export const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:100,
      easing:"ease-in-cubic"
    });
  },[]);

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