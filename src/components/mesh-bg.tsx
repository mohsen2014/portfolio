"use client"
import React, { useEffect } from 'react'

function MeshGB({children}: {children?: React.ReactNode}) {
    useEffect(()=>{
      if(typeof window !== 'undefined'){
        let JParticle = require('jparticles');
        new JParticle.Particle('#particle-canvas', {
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
      }
    }, []);
  return (
    <div id="particle-canvas" className='h-[250px] w-[400px] absolute rounded-full'>
    </div>
  )
}

export default MeshGB