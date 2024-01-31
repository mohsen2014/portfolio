import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

function Section({description, title, children, id}: {
    description: string,
    title: string,
    children: React.ReactNode,
    id: string
}) {
  return (
    <div className="relative">
        <Card className='border-none min-h-80 mt-8' id={id}>
            <CardHeader>
                <CardDescription className='w-full text-center text-gray-800 text-xl capitalize'>
                    {description}
                </CardDescription>
                <CardTitle className='w-full text-center font-bold text-3xl capitalize'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className='w-full flex justify-center items-center'>
                {children}
            </CardContent>
        </Card>
    </div>
  )
}

export default Section