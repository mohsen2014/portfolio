import React, { Dispatch, SetStateAction } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { IconType } from 'react-icons'

function ExperienceCard({Icon, title, position, children, onHover, years, type}:{
    Icon?: IconType,
    title: string,
    position: string,
    children: React.ReactNode,
    onHover?: Dispatch<SetStateAction<boolean>>,
    years: number,
    type?: string
}) {
  return (
    <Card className='w-full border-gray-300  hover:border-gray-400 hover:bg-gray-100 p-2 md:p-6' onMouseEnter={() => onHover && onHover(true)} onMouseLeave={() => onHover && onHover(false)}>
        <CardHeader className='p-2 md:p-6'>
            <CardTitle className='flex flex-col'>
                <div className='flex '>
                    <div className="flex capitalize gap-2 w-[75%]">
                        {Icon && <Icon/>}
                        {title} 
                    </div>
                    <div className='text-right text-sm text-gray-600 w-[20%]'>
                        {years} Years
                    </div>
                </div>
                <div className='flex'>
                    <div className='font-semibold text-sm w-[75%]'>
                        {position}
                    </div>
                    <div className='text-right text-sm text-gray-600 w-[20%]'>
                        {type}
                    </div>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent className='p-2 md:p-6'>
            {children}
        </CardContent>
    </Card>
  )
}

export default ExperienceCard