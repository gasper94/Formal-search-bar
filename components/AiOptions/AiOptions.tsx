import React from 'react';

// Components
import { Icons } from "@/components/icons"

export const AiOptions = () => {

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  
  return(
    <div 
      onTouchMove={handleTouchMove}
      onScroll={handleScroll}
      className='flex items-center flex-row w-full overflow-x-auto overflow-y-hidden gap-2 pl-2 p-3 h-12' 
      style={{scrollbarWidth: 'none', msOverflowStyle: 'none', backgroundColor: '#F2F5F9'}}
    >
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times user X has made Y?</span>
      </a>
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times has user group X has made Y query?</span>
      </a>
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times user X has made Y?</span>
      </a>
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times has user group X has made Y query?</span>
      </a>
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times user X has made Y?</span>
      </a>
      <a className="flex flex-row items-center flex-shrink-0 bg-gray-200 px-3 py-2 rounded-2xl gap-2 cursor-pointer">
          <Icons.stars className="h-6 w-6" color={`rgba(75,85,99,1)`}/>
        <span className='text-xs font-semibold text-gray-600' style={{backgroundColor: '#E3E7ED'}}>How many times has user group X has made Y query?</span>
      </a>
    </div>
  )
}