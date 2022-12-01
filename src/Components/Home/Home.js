import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedNumber from 'react-animated-number/build/AnimatedNumber'
import Helmet from 'react-helmet'
const Home = () => {

  const [customerNum, setcustomerNum]=useState(0);
  useEffect(() => {
    if(customerNum==1000){}
    else 
      setcustomerNum(customerNum+1000)
  }, []);
  return (
    <div className='mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jom Tapau</title>
      </Helmet>
      <AnimatedNumber component="text" value={customerNum}
            style={{
                fontSize: 200
            }}
            frameStyle={perc => (
               {opacity:perc/100}
            )}
            duration={1000}
            formatValue={n => n.toFixed(0)}/>
      <h1>Hello from home</h1>
  
    </div>
  )
}

export default Home
