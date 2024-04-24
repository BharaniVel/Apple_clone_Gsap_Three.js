import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  const [videoSrc,setvideoSrc] = useState(window.innerWidth < 735 ? smallHeroVideo : heroVideo)
  const handleSrcVideoset =() => {
    if(window.innerWidth < 735){
        setvideoSrc(smallHeroVideo)
    }
    else{
        setvideoSrc(heroVideo)
    }
  }
  useEffect(()=> {
    window.addEventListener('resize',handleSrcVideoset)
    return () => {
        window.removeEventListener('resize',handleSrcVideoset)
    }
  })
  useGSAP(()=>{
    gsap.to('#title',{
        opacity: 1,
        delay: 2,
    })
    gsap.to('#csk',{
        opacity: 1,
        y: -40,
        delay: 2,
    })
  },[])

  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col gap-5'>
            <p id='title'
            className='hero-title my-40'>Iphone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'></div>
            <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
                <source  src={videoSrc}/>
            </video>
            <div className="flex flex-col items-center opacity-0 translate-y-20" id="csk">
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $999 or $41.62/mo. for 24 mo.1</p>
            </div>
        </div>
    </section>
  )
}

export default Hero