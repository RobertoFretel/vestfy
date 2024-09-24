import { Camera, Menu, Home, Plus, ShoppingBag } from 'lucide-react'
import Profile from './userProfile'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet"
import React from 'react'


export function BaseLayout({ children }: { children: React.ReactElement }) {
  return <Sheet>
    <section className='w-full h-full flex flex-col'>
      <div className="w-full mx-auto bg-white overflow-y-scroll" style={{
        height: 'calc(100% - 5rem)'
      }}>
        <header className="flex justify-between items-center p-4">
          <Link href='/'>
            <h1 className="text-3xl font-serif">Vestfy</h1>
          </Link>
          <div className="flex gap-4">
            <Camera className="w-6 h-6" />
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
          </div>
        </header>
        
        { children }
      </div>
      <nav className="w-full max-w-md h-20 bg-white border-t flex items-center justify-around py-2">
        <Link href='/'>
          <Home className="w-6 h-6" />
        </Link>
        <Link href='/createoutfit'>
          <Plus className="w-6 h-6" />
        </Link>
        <Link href='/myoutfits'>
          <ShoppingBag className="w-6 h-6" />
        </Link>
      </nav>
    </section>
    <SheetContent side={"left"} className='flex flex-col'>
      <SheetHeader>
        <SheetTitle>
          <Profile></Profile>
        </SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <div id="options" className='w-full h-auto'>
        <li className='w-full list-none py-1 font-medium text-lg'>
          <Button className='w-full py-2 justify-start' variant={"ghost"}>Settings</Button>
        </li>
        <li className='w-full list-none py-1 font-medium text-lg'>
          <Button className='w-full py-2 justify-start' variant={"ghost"}>
            <Link href='/myoutfits'>I miei vestiti</Link>
          </Button>
        </li>
      </div>
      <SheetFooter className='mt-auto'>
        <a href="#" className='underline'>Esci</a>
      </SheetFooter>
    </SheetContent>
  </Sheet>
}
