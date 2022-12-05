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
    
      setcustomerNum(1570);
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
<div className='mt-5 d-flex justify-content-around' style={{color:"grey"}}>

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
  
<section className='d-flex justify-content-around mt-5' >
  <div className='w-50 '><img className='w-100 border  rounded' src="https://i.ibb.co/xfKv5cX/IMG-9318.jpg" alt="" /></div>
  <div className='w-50'>
    <p className='text-danger' style={{fontFamily:"'Ma Shan Zheng', cursive",opacity:"0.5",textAlign:"start",marginLeft:"50px", fontSize:"100px"}}><i>About</i></p>
    <h1 style={{color:'grey'}}>Jom Tapau</h1>
    <p style={{textAlign:"start", marginRight:"50px",marginLeft:"50px",color:"grey"}}>JOM TaPAU App is a
Pre-order food delivery platform.
<br />
 It
Help university students and working adults 
to afford
<br />
 cheaper food delivery meals and services
</p>
<i className='fs-3'><p style={{color:"grey"}}>Sunday to Thursday <b className='text-danger'>10am-5pm </b></p></i>
  </div>
</section>

<section>
  
</section>
    </div>
  )
}

export default Home
