import React, { Dispatch, SetStateAction } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { IconType } from 'react-icons'

function DetailCard({Icon, title, children, onHover}:{
    Icon?: IconType,
    title: string,
    children: React.ReactNode,
    onHover?: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Card className='w-full border-gray-300 hover:border-gray-400 hover:bg-gray-100 p-2 md:p-6 h-[100%]' onMouseEnter={() => onHover && onHover(true)} onMouseLeave={() => onHover && onHover(false)}>
        <CardHeader className='p-2 md:p-6'>
            <CardTitle className='flex capitalize'>
                {Icon && <Icon/>}
                {title} 
            </CardTitle>
        </CardHeader>
        <CardContent className='p-2 md:p-6'>
            {children}
        </CardContent>
    </Card>
  )
}

export default DetailCard