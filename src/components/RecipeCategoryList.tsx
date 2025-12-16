'use client'
import { recipeStore } from '@/store/recipeStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const RecipeCategoryList = ({ category }: {category: string}) => {
    const { recipe, loading, getRecipeByCategory } = recipeStore();

    useEffect(()=> {
        getRecipeByCategory(category)
    },[category]);
    
    if(loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center ">
                <div className="h-44 w-44 border-[5px] rounded-full border-t-slate-500 animate-spin"></div>
            </div>
        )
    }

    if(!recipe.length) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-2  pt-16'>
                <div className='h-[70%] gap-2 shadow-glow rounded-lg flex items-center flex-col justify-center max-xs:w-[90%]  w-[60%]'>
                    <p className='text-slate-500 font-anton'>No Meals available in this category.</p>
                    <Link href={'/racips'} className='rounded-lg dom text-sm bg-blue-600  overflow-hidden hover:text-white relative flex items-center justify-center font-anton text-slate-50 shadow-glow p-2'>
                        <span>Go Back</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div className='flex w-full items-center justify-center h-screen'>
        <div className='h-full pt-5 w-full p-1'>
            <div className='p-1 grid  max-sm:grid-cols-2 w-full max-md:grid-cols-3 grid-cols-4 gap-2'>
                {
                    recipe.map((r, i)=> {
                        return(
                            <Link href={`/racips/${category}/${r?.idMeal}`} key={i} className='w-full hover:scale-105 flex hover:shadow-yellow-300 shadow-slate-300 flex-col rounded-md p-1 shadow-glow  h-full'>
                                <div className='flex cursor-pointer items-center w-full h-full justify-center'>
                                    <Image src={r?.strMealThumb} alt={r?.strMeal} height={200} width={200} className='object-cover'/>  
                                </div>
                                <div className='text-center max-xs:text-[11px] max-sm:text-sm hover:text-blue-500 hover:underline cursor-pointer font-roboto text-slate-600'>
                                    <p className='line-clamp-2'>{r?.strMeal}</p>
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

export default RecipeCategoryList