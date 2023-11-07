import React from 'react'
import { Button } from './ui/button'
import { FiPlus, FiSearch } from 'react-icons/fi'
import Link from 'next/link'

const NotesHeader = () => {
  return (
    <>
    <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">All Notes</h1>
        <div className="hidden gap-5 md:flex">
          <div className="flex h-9 items-center px-3 border rounded-md">
            <FiSearch />
            <input placeholder="Search notes .." type="text" className=" outline-none placeholder:text-sm px-2 text-sm" />
          </div>
          <Button size={"sm"} variant={"outline"} className="">
            <Link href={""}>📁 New Folder</Link>
          </Button>
          <Button size={"sm"} className="bg-blue-600">
            <Link href={""}>📝 New Note</Link>
          </Button>
        </div>

        <div className='block sm:hidden'>
          <Button size={'icon'} variant={'default'} className='text-lg bg-blue-600 h-8 w-8'><FiPlus/></Button>
        </div>
        
      </div>
    </>
  )
}

export default NotesHeader