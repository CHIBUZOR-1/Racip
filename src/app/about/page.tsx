import React from 'react'

// 💡 This handles SEO for this page only
export const metadata = {
  title: "About • Racip",
  description: "Learn more about the Racip recipe finder app.",
};

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='h-full w-full pt-12 flex flex-col text-yellow-400 items-center justify-center'>
        <h1 className='font-playwrite [text-shadow:0_0_10px_#facc15]  text-3xl font-semibold text-slate-600'>About Racip</h1>
        <div className=''>
            <p className='text-slate-500 max-xs:text-xs font-semibold max-sm:text-sm pt-2 text-center'>
              Lorem Ipsum is simply a dummy text of the printing and typesetting industry.
              <br /> 
              Lorem ipsum has been the industry's standard dummy text since the 1500s. 
              <br />
              When an unknown printer took a gallery of type and scrambled it to make a type specimen book.
            </p>
          </div>
      </div>
    </div>
  )
}

export default page