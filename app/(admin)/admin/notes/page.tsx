'use client'
import React from 'react'
import Math from '@/app/content/Maths.mdx'

const Notes = () => {
  return (
    <div className='p-8 bg-slate-100 dark:bg-primary-foreground dark:bg-background rounded-md w-full'>
        <div className='prose w-full dark:prose-headings:text-white dark:text-white'>
           <Math />
        </div>
    </div>
  )
}

export default Notes