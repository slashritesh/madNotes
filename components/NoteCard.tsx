import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface NoteCardProps {
    title : string,
    filename ?: string,
    isFolder : boolean,
    collection ?: number
}

const NoteCard = (props : NoteCardProps) => {
  return (
    <>
    <Card className={`shadow-none ${props.isFolder === true ? 'bg-orange-100 border-none' : ''}`}>
        <CardContent className='py-5'>
        <CardTitle className='text-sm sm:text-lg truncate '>
            {props.isFolder === true ? '📁 ' : '📄 '}
            {props.title}
        </CardTitle>
        <CardDescription className='text-sm'>{props.isFolder === true ?  `${props.collection} collections` : props.filename}</CardDescription>
        </CardContent>
    </Card>
    </>
  )
}

export default NoteCard