"use client"
import MeshGB from '@/components/mesh-bg'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
      <Navbar></Navbar>
      <div className='w-full'>
          <div className='h-[700px] w-[1000px]'>
              <div className='h-[400] w-full flex justify-around items-center '>
                <Image  src="/me.jpg" className='rounded-full w-[400px] h-[400px] object-cover' width={400} height={400} alt='mohsen emami'></Image>
                <div className="flex flex-col gap-3 items-start justify-center h-full">
                  <MeshGB>
                  </MeshGB>
                  <div className='text-sm text-gray-900'>Hello, I`m</div> 
                  <h1 className='text-5xl font-bold'>Mohsen Emami</h1>
                  <h2 className='text-4xl font-extrabold text-gray-700'>Front End Developer</h2>
                </div>
              </div>
          </div>
      </div>
    </main>
  )
}
