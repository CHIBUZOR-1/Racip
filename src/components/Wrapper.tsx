'use client'
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar';
import Loader from './Loader';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const pathname = usePathname();
  const gog = pathname.split('/').filter(Boolean)

  // Loading logic
  useEffect(() => {
    if (!initialLoadDone) {
      const timer = setTimeout(() => {
        setLoading(false);
        setInitialLoadDone(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // immediately show children on subsequent navigations
    }
  }, []);

  // Scroll-to-top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
         <div className='w-full'>
          <Navbar back={gog}/> {/* Navbar only shows after loading */}
          {children}
        </div>
      )}
    </>
  )
}

export default Wrapper