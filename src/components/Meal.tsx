'use client'

import { recipeStore } from '@/store/recipeStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Meal = ({ mId, rcp }: { mId: string, rcp: string }) => {
    const { meal, loading, getCategoryMealById } = recipeStore();
    
    useEffect(()=> {
        getCategoryMealById(mId)
    },[mId]);
        
    if(loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center ">
                <div className="h-44 w-44 border-[5px] rounded-full border-t-slate-500 animate-spin"></div>
            </div>
        )
    }

    if(!meal || meal.length === 0) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-2  pt-16'>
                <div className='h-[70%] gap-2 shadow-glow rounded-lg flex items-center flex-col justify-center max-xs:w-[90%]  w-[60%]'>
                    <p className='text-slate-500 font-anton'>Meal not found.</p>
                    <Link href={`/racips/${rcp}`} className='rounded-lg dom text-sm bg-blue-600  overflow-hidden hover:text-white relative flex items-center justify-center font-anton text-slate-50 shadow-glow p-2'>
                        <span>Go Back</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div className='flex w-full items-center justify-center h-screen'>
        <div className='h-full w-full p-1'>
            <div className={`${meal?.strMeal > 20 ? 'max-xs:text-[10px]' : 'max-xs:text-xl'} flex font-rubik  text-slate-600 text-2xl items-center justify-center`}>
               <h1>{meal?.strMeal}</h1> 
            </div>
            <div className='w-full p-1 rounded-md flex items-center justify-center'>
                {meal?.strMealThumb && (
                   <Image src={meal?.strMealThumb} unoptimized alt={'meal'} height={500} width={500} className='object-fill max-sm:h-[300px] max-zs:h-48 max-xs:h-52 max-lg:w-[80%] h-[550px] w-[60%] shadow-glow rounded-md max-sm:w-[90%]'/> 
                )}
            </div>
            <div className='w-full p-1 font-roboto font-semibold text-slate-600 gap-2 py-2 flex items-center justify-center'>
                <p className=''>Link:</p>
                <a href={meal.strYoutube} className='text-blue-500 animate-pulse font-normal  hover:underline' target='_blank' rel="noopener noreferrer">Watch Video</a>
            </div>
            <div className='w-full items-center flex flex-col text-xl justify-center'>
                <div className='font-rubik text-slate-600'>Ingredients</div>
                <div className='w-full'>
                    {
                        meal?.ingredients?.map((m: any, i: number)=> {
                            return(
                                <div key={i} className='w-full p-1'>
                                    <div className='flex p-1 max-xs:text-[11px] max-md:text-sm items-center gap-2 font-roboto text-slate-600'>
                                      <span>{m?.ingredient}</span>
                                      <span><i className='bx bx-right-arrow-alt'></i></span>
                                      <span>{m?.measure}</span>  
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='font-rubik text-xl  text-slate-600'>PREPARATION STEPS</div>
                <div className='w-full text-slate-600 max-xs:text-xs p-1 max-md:text-sm font-roboto'>
                   <p className="whitespace-pre-line leading-relaxed">
                        {meal.strInstructions}
                    </p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meal