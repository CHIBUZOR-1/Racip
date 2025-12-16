'use client'
import { recipeStore } from '@/store/recipeStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Categories = () => {
    const loading = recipeStore((state) => state.loading);
    const recipes = recipeStore((state) => state.recipes);
    const getCategories = recipeStore((state) => state.getCategories);

    useEffect(() => {
        getCategories();
    }, []);

    if(loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center ">
                <div className="h-44 w-44 border-[5px] rounded-full border-t-slate-500 animate-spin"></div>
            </div>
        )
    }

    if(!recipes.length) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-2  pt-16'>
                <div className='h-[70%] gap-2 shadow-glow rounded-lg flex items-center flex-col justify-center max-xs:w-[90%]  w-[60%]'>
                    <p className='text-slate-500 font-anton'>No recipes available.</p>
                    <Link href={'/'} className='rounded-lg dom text-sm bg-blue-600  overflow-hidden hover:text-white relative flex items-center justify-center font-anton text-slate-50 shadow-glow p-2'>
                        <span>Continue</span>
                    </Link>
                </div>
            </div>
        )
    }

  return (
    <div className='flex w-full items-center justify-center h-screen'>
        <div className='h-full pt-12 w-full p-1'>
            <div className='p-1 grid  max-sm:grid-cols-2 w-full max-md:grid-cols-3 grid-cols-4 gap-2'>
                {
                    recipes.map((r, i)=> {
                        return(
                            <Link href={`/racips/${r?.strCategory}`} key={i} className='w-full hover:scale-105 flex hover:shadow-yellow-300 shadow-slate-300 flex-col rounded-md p-1 shadow-glow  h-full'>
                                <div className='flex cursor-pointer items-center w-full h-full justify-center'>
                                    <Image src={r?.strCategoryThumb} alt={r?.strCategory} height={200} width={200} className="object-cover"/>  
                                </div>
                                <div className='text-center max-xs:text-[9px] max-sm:text-sm hover:text-blue-500 hover:underline cursor-pointer font-roboto text-slate-600'>
                                    <p className=''>{r?.strCategory}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories