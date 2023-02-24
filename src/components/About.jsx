// import React, {useContext} from 'react'
// import { AppContext} from '../context/productcontex'
import { useProductContext } from '../context/productcontex'
import HeroSection from './HeroSection'

const About = () => {
  // const {myName} = useContext(AppContext);
  
    // another way to use
  const {myName} = useProductContext();  

  const data = {
    name: "Thapa Ecommerce",
  }

  return (
    <>
     <p>{myName}</p>
    <HeroSection myData={data}/>
    </>
  )
}

export default About