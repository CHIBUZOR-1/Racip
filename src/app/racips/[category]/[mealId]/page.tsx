import Meal from '@/components/Meal';
import React from 'react'

export const metadata = {
  title: "Meal Details • Racip",
  description: "Full details of this meal with its preparation instructions.",
};

const MealPage = async ({ params } : { params: Promise<{ mealId: string, category: string }>}) => {
    const { mealId, category } = await params;
    console.log(mealId, category);
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full pt-10'>
        <Meal mId={mealId} rcp={category} />
      </div>
    </div>
  )
}

export default MealPage