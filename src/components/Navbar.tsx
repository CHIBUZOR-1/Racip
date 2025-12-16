
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import React from 'react'

const Navbar = ({back}: {back: string[]}) => {
  // show back button only when we can go up one level
  const canGoBack = back.length > 1;

  // remove last segment
  const backPath = '/' + back.slice(0, -1).join('/');
  
  return (
    <div className='w-full fixed p-1 flex z-30 items-center justify-center'>
        <div className='w-[80%] bg-gray-800 p-0.5 rounded-md flex items-center justify-between'>
            <Link href={'/'} className='text-white max-xs:text-xl font-rubik xs:text-2xl [text-shadow:0_0_10px_#ef4444]  font-semibold'>RACIP</Link>
            <div className='flex gap-2 max-xs:p-0.5 max-xs:gap-2 px-1 items-center'>
              {canGoBack && (
                <Link
                  href={backPath}
                  className="bg-slate-50 w-7 flex items-center justify-center p-1 rounded-md shadow-yellow-600 shadow-glow cursor-pointer"
                >
                  <i className="bx bx-arrow-back" />
                </Link>
              )}
              <SignedIn >
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link  href={'/sign-in'} className='text-slate-50 cursor-pointer  max-xs:text-xs hover:bg-blue-500 rounded-md p-2 hover:text-slate-50 font-semibold'>Login</Link>
                <Link href={'/sign-up'} className='text-slate-50 cursor-pointer  max-xs:text-xs hover:bg-blue-500 rounded-md p-2 hover:text-slate-50 whitespace-nowrap font-semibold'>Sign Up</Link>
              </SignedOut>
            </div>
        </div>
    </div>
  )
}

export default Navbar