import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import Videocarousel from './Videocarousel';

const Highlight = () => {
    useGSAP(()=>{
        gsap.to('#titlehighlight',{
            opacity:1,
            y:0,
        })
        gsap.to('#link',{
            opacity:1,
            y:0,
            duration: 1,
            stagger: 0.25,
        })
    },[])
  return (
    <section id='highlights' className='w-scree overflow-hidden common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 width-full md:flex items-end justify-between'>
            <h1 id='titlehighlight' className='section-heading'>Get the Highlight.</h1>
            <div className='flex flex-wrap gap-5 items-end' >
                <p id='link' className='link'>Watch the flim
                <img src={watchImg} alt="watchLink" className='ml-2'/></p>
                <p id='link' className='link'>Watch the event
                <img src={rightImg} alt="watchevent" className='ml-2'/></p>
            </div>
            </div>
        </div>
        <Videocarousel />
    </section>
  )
}

export default Highlight