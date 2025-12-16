import RecipeCategoryList from '@/components/RecipeCategoryList';
import React from 'react'

export const metadata = {
  title: "Meal Category List • Racip",
  description: "Browse recipe meal under this category.",
};

const page = async ({ params } : { params: Promise<{ category: string }>}) => {
  const { category } = await params;
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full pt-10'>
        <RecipeCategoryList category={category} />
      </div>
    </div>
  )
}

export default page