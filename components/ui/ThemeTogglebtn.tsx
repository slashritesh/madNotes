"use client"

import * as React from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
export function ModeToggle() {
  const { theme,setTheme } = useTheme()
  


  const handleTheme =()=>{
    if(theme === 'light'){
        setTheme('dark')
    }else if(theme === 'dark'){
        setTheme('light')
    }
  }
  return <>
  <Button size={'icon'} onClick={handleTheme} className="bg-transparent" variant={'secondary'}>
    {theme === 'light' ? <FiMoon className='text-lg' /> : <FiSun className='text-lg'/>}
  </Button>
  </>
  
}
