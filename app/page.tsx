'use client'

import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import { Icons } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"

import image from '../public/screen.png'

// Components
import { StatsSection } from "../components/StatsSection/StatsSection";
import { StatsSection2 } from "../components/StatsSection2/StatsSection2";
import { CommonCard } from '@/components/CommonCard/CommonCard';
import { BarChart } from '@/components/graphs/barChart';
import { HeatmapChart } from '@/components/graphs/heatMap';

export default function IndexPage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {isMobile ? (
      <div className='flex flex-col justify-center items-center h-screen w-full bg-gradient-to-t from-blue-200'>
        <svg width="250" height="250" viewBox="0 0 2048 1792" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1408 1472V1152H1536V1472H1408ZM1408 1664V1536H1536V1664H1408ZM0 0H2048V1434L1920 1178V128H128V805L576 358L1148 930L1088 1050L576 538L128 987V1408H909L845 1536H0V0ZM1600 384C1582.67 384 1567.67 377.667 1555 365C1542.33 352.333 1536 337.333 1536 320C1536 302.667 1542.33 287.667 1555 275C1567.67 262.333 1582.67 256 1600 256C1617.33 256 1632.33 262.333 1645 275C1657.67 287.667 1664 302.667 1664 320C1664 337.333 1657.67 352.333 1645 365C1632.33 377.667 1617.33 384 1600 384ZM896 1792L1472 640L2048 1792H896ZM1077 1680H1867L1472 890L1077 1680Z" fill="black"/>
        </svg>

        <div className='px-10 md:px-20 text-center'>
          <p className="text-lg md:text-xl font-semibold">Your display is too small for this application.</p>
          <p className="text-lg md:text-xl text-gray-600">Please consider using a device with a larger display.</p>
        </div>
      </div>
    ): (
    <div className='h-screen w-full'>
        <SiteHeader />

        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-blue-200 gap-16">
          <StatsSection >
              <CommonCard
                title="Logs"
                subtitle="Updated 15 minutes ago"
                details="12 New Logs since update"
                >
                <div className='flex flex-col flex-1 h-full bg-white rounded-md w-72 pl-4'>
                    <div className='ml-1 mt-4 text-sm  text-gray-600'>Logs / Time</div>
                        <div className='flex-1 h-32'>
                            <BarChart />
                        </div>
                    <div className='ml-1 mb-8 mt-1 text-xs text-gray-400'>Jan 2, 08:18:00</div>
                </div>
            </CommonCard>
          </ StatsSection>

          <StatsSection2 /> 

          {/* <StatsSection >
              <CommonCard
                title="Access"
                subtitle="Updated 15 minutes ago"
                details="12 New Logs since update"
                >
                  <div className='flex flex-col flex-1 h-full bg-white rounded-md w-72 pl-4'>
                      <div className='ml-1 mt-4 text-sm text-gray-600'>Access over 30 days</div>
                      <div className="flex-1 h-32">
                          <HeatmapChart />
                      </div>
                      <div className="flex flex-row ml-1 mb-8 mt-1 text-xs gap-1">
                          <div className='text-gray-400'>Total Views</div>
                          <div className='text-gray-700 font-bold'>3,057</div>
                          <div className='flex flex-row items-center text-green-500 font-semibold'>
                          <Icons.trendingUp width={10} height={10} color='rgb(34, 197, 94)' />
                            24%
                          </div>
                      </div>
                  </div>
            </CommonCard>
          </ StatsSection> */}

          {/* <StatsSection >
              <CommonCard
                title="Access"
                subtitle="Updated 15 minutes ago"
                details="12 New Logs since update"
                >
                  <div className='flex flex-col flex-1 h-full bg-white rounded-md w-72 pl-4'>
                      <div className='ml-1 mt-4 text-sm'>Queries in the database</div>
                      <div className="flex-1">
                          <div className='py-4 flex flex-row items-center gap-4'>
                          <div className='flex flex-col gap-2 h-18 p-3 bg-gray-100 rounded-md'>
                          <div className='text-sm text-gray-600'>Total queries</div>
                          <div className='text-2xl font-bold'>78,513</div>
                          </div>
                          <div className='flex flex-col gap-2 h-18 p-3 bg-gray-100 rounded-md'>
                          <div className='text-sm text-gray-600'>Weekly trend</div>
                          <div className='text-2xl font-bold'>250%</div>
                          </div>
                          </div>
                      </div>
                      <div className="ml-1 mb-8 mt-1 text-xs text-gray-400">Jan 2, 08:18:00</div>
                  </div>
            </CommonCard>
          </ StatsSection>*/}
          
        </div>
      </div> 
    )
    }
    </>
  )
}
