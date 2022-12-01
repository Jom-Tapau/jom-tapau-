import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedNumber from 'react-animated-number/build/AnimatedNumber'
import Helmet from 'react-helmet'
import HomeCarousel from './HomeCarousel'
const Home = () => {

  const [customerNum, setcustomerNum]=useState(0);
  const [experience, setExperience]=useState(0);
  const [menu, setMenu]=useState(0);
  useEffect(() => {
    
      setcustomerNum(1000);
      setExperience(2);
      setMenu(23);
  }, []);
  return (
    <div className='mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jom Tapau</title>
      </Helmet>
      <HomeCarousel></HomeCarousel>
<div className='d-flex justify-content-around' style={{color:"grey"}}>

<div className=''>
  <AnimatedNumber component="text" value={experience}
            style={{
                fontSize: 60
            }}
            frameStyle={perc => (
               {opacity:perc/100}
            )}
            duration={10000}
            formatValue={n => n.toFixed(0)}/>
           <p><small>Years of Experience</small></p>
  </div>
    <div>
    <AnimatedNumber component="text" value={menu}
            style={{
                fontSize: 60
            }}
            frameStyle={perc => (
               {opacity:perc/100}
            )}
            duration={10000}
            formatValue={n => n.toFixed(0)}/>
                <p><small>Menus</small></p>
 
    </div>
    <div>
    <AnimatedNumber component="text" value={customerNum}
            style={{
                fontSize: 60
            }}
            frameStyle={perc => (
               {opacity:perc/100}
            )}
            duration={10000}
            formatValue={n => n.toFixed(0)}/>
                <p><small>Satisfied Customers</small></p>
 
    </div>
</div>
  
<section>
  <div><img className='w-100' src="https://i.ibb.co/xfKv5cX/IMG-9318.jpg" alt="" /></div>
</section>
    </div>
  )
}

export default Home
