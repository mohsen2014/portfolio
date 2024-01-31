"use client"
import DetailCard from '@/components/detail-card'
import ExperienceCard from '@/components/expriance-card'
import MeshGB from '@/components/mesh-bg'
import Navbar from '@/components/navbar'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineContacts, AiOutlineFilePdf } from 'react-icons/ai'

export default function Home() {
  const [hoverExperience, setHoverExperience] = useState(false)
  const [hoverProSkills, setHoverProSkills] = useState(false)
  const [hoverKeenOn, setHoverKeenOn] = useState(false)
  const [hoverTeamWork, setHoverTeamWork] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center md:gap-300 gap-20  p-0 m-0">
      <Navbar></Navbar>
      <div className='w-full'>
          <div className='min-h-[550px] md:min-w-[1000px] w-full'>
              <div className='h-[400] w-full md:justify-around md:flex-row flex flex-col items-center gap-20 '>
                <Image  src="/portfolio/me.jpg" className='rounded-full w-[400px] h-[400px] object-cover' width={400} height={400} alt='mohsen emami'></Image>
                <div className="flex flex-col gap-3 items-center md:items-start justify-center h-full">
                  <MeshGB/>
                  <div className='text-sm text-gray-900'>Hello, I`m</div> 
                  <h1 className='text-4xl md:text-5xl font-bold'>Mohsen Emami</h1>
                  <h2 className='text-3xl md:text-4xl font-extrabold text-gray-700'>Front End Developer</h2>
                  <div className='flex gap-6 w-full mt-6 justify-center text-3xl font-medium z-10'>
                    <Button variant={'outline'} asChild className='text-xl p-3 rounded-xl flex gap-2 justify-center  hover:bg-gray-800 hover:text-white' onClick={()=>{}}>
                      <Link href='/Resume.pdf'><AiOutlineFilePdf /> Download CV</Link> 
                    </Button>
                    <Button variant={'secondary'} asChild className='flex gap-2 justify-center text-xl p-3 rounded-xl bg-gray-700 text-white hover:bg-gray-800' onClick={()=>{}}>
                      <Link href="mailto:moh.motamede@gmail.com">
                        <AiOutlineContacts />
                        Contact Info
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
          </div>
          <Section description='Get To Know More' title="about me" id='about'>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-5 w-full'>
              <div className='row-span-2 text-gray-800 pr-3'>
                <p>
                  As a Front-End Developer with
                  <span className={hoverExperience ? 'font-semibold' : ''}> 10 years of experience</span>
                   , I have successfully delivered web applications using various technologies and frameworks,
                   <span className={hoverProSkills ? 'font-semibold' : ''}> such as React, Angular and CSS frameworks like Tailwind and Bootstrap</span>. I have also integrated 
                   <span className={hoverKeenOn ? 'font-semibold' : ''}> legacy systems and ERPs with modern web solutions</span>. I am well-versed in the Scrum Agile methodology and 
                   <span className={hoverTeamWork ? 'font-semibold' : ''}> enjoy working in cross-functional teams. </span>I have a passion for creating user-friendly and responsive web interfaces that meet the needs of the clients and the users.
                </p>
              </div>
              <div className="">
                <DetailCard  title='Experience' onHover={setHoverExperience}>
                  <div className='flex gap-3 items-center justify-between'>
                    <div className='text-gray-400 text-4xl'>
                      +10
                    </div>
                    <div>
                      years experience in web development
                    </div>
                  </div>
                </DetailCard>
              </div>
              <div className="">
                <DetailCard  title='Professional Skills' onHover={setHoverProSkills}>
                  <div className='flex gap-3 items-center justify-between'>
                    <div className='text-gray-400 text-4xl'>
                      4
                    </div>
                    <div>
                      Big scale project for companies with well-known libraries and frameworks 
                    </div>
                  </div>
                </DetailCard>
              </div>
              <div className="">
                <DetailCard  title='keen on' onHover={setHoverKeenOn}>
                  <div className='flex gap-3 items-center justify-between'>
                    <div className='text-gray-400 text-4xl'>
                      +4
                    </div>
                    <div>
                      years I have worked with ERP and legacy systems
                    </div>
                  </div>
                </DetailCard>
              </div>
              <div className="">
                <DetailCard  title='team work' onHover={setHoverTeamWork}>
                  <div className='flex gap-3 items-center justify-between'>
                    <div className='text-gray-400 text-4xl'>
                      +5
                    </div>
                    <div>
                      years I have worked with Scrum and Agile methodology
                    </div>
                  </div>
                </DetailCard>
              </div>
            </div>
          </Section>
          <Section description='Explore My' title="Experience" id='experience'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            <ExperienceCard position='Front-End developer'  title='Playtime Solutions' years={4} type="remote">
              <div className='flex items-center justify-between p-2'>
                <p className='h-50'>
                  During my four years as a <b>Senior Front-End Developer at IDP Australia Co</b>., I played a key role in building a large scale <b>Angular project</b>. Recently, I co-founded and implemented a successful Scrum Agile framework to improve team collaboration. As a <b>Front-End Lead</b>, I managed several successful releases and mentored junior developers, contributing to team growth. My time at IDP has been marked by successful project management, innovation, and a focus on team development.
                </p>
              </div>
            </ExperienceCard>
            <ExperienceCard position='Front-End developer'  title='RDsys CO' years={3} type="">
              <div className='flex items-center justify-between p-2'>
                <p className='h-50'>
                  Raya Diar Company is a bi-national, Iranian-Canadian, company and a subsidiary of EPFC. I have worked for this company for three years. I have worked on an ERP project for two years and then done an ERP rewrite project for a year. During those three years,  we, the employees of the company, have worked with a variety of technologies included react, sass, node, backbone, etc.
                </p>
              </div>
            </ExperienceCard>
            <ExperienceCard position='Front-End developer'  title='ICAN CO' years={3} type="">
              <div className='flex items-center justify-between p-2'>
                <p className='h-50'>
                Modifying existing software to correct errors, to adapt it to new hardware, or to upgrade interfaces and improve performance.
                </p>
              </div>
            </ExperienceCard>
            </div>
          </Section>
      </div>
    </main>
  )
}
