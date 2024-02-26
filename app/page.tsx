import React from 'react';
import { Icons } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"

// Components
import { StatsSection } from "../components/StatsSection/StatsSection";
import { StatsSection2 } from "../components/StatsSection2/StatsSection2";
import { CommonCard } from '@/components/CommonCard/CommonCard';
import { BarChart } from '@/components/graphs/barChart';
import { HeatmapChart } from '@/components/graphs/heatMap';

export default function IndexPage() {
  return (
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
