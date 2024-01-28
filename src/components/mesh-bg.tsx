"use client"
import React, { useEffect } from 'react'
import { Particle } from 'jparticles'

function MeshGB({children}: {children?: React.ReactNode}) {
    useEffect(()=>{
        new Particle('#particle-canvas', {
            color: 'gray',
            maxSpeed: .2,
            minSpeed: .2,
            lineShape: 'cube',
            range: 2000,
            proximity: 60,
            // Turn on parallax effect
            parallax: false,
            opacity: .5
        })
    });
  return (
    <div id="particle-canvas" className='h-[250px] w-[400px] absolute'>
    </div>
  )
}

export default MeshGB