'use client'
import { Icons } from "@/components/icons"

// Components
import {HeatmapChart} from "@/components/graphs/heatMap"
import {BarChart} from "@/components/graphs/barChart"

export const StatsSection2 = () => (
    <div className='w-full pl-12'>
    <div className='text-2xl text-gray-800 font-semibold mt-4 mb-2'>Saved</div>
    <div className='flex flex-row h-56 w-full gap-4 overflow-x-auto overflow-y-hidden pr-12'>
    <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4'
        style={{backgroundColor: '#eff6fd'}}
    >
        <div className='flex flex-col justify-between w-56 h-full'>
        <div className='w-full h-full'>
            <div className='text-xl font-semibold text-gray-600'>
            Access
            </div>
            <div className='text-gray-400 '>
            Updated 15 minutes ago
            </div>
        </div>
        <div className='flex items-center flex-row gap-2 mb-2'>
            <Icons.alert color='rgb(209,213,219)' />
            <div className='text-sm text-gray-400'>
            12 New Logs since update
            </div>
        </div>
        </div>
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
    </div>
    <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4'
        style={{backgroundColor: '#eff6fd'}}
    >
        <div className='flex flex-col justify-between w-56 h-full'>
        <div className='w-full h-full'>
            <div className='text-xl font-semibold text-gray-600'>
            Observability
            </div>
            <div className='text-gray-400 '>
            Updated 15 minutes ago
            </div>
        </div>
        <div className='flex items-center flex-row gap-2 mb-2'>
            <Icons.alert color='rgb(209,213,219)' />
            <div className='text-sm text-gray-400'>
            12 New Logs since update
            </div>
        </div>
        </div>
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
    </div>
    <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4'
        style={{backgroundColor: '#eff6fd'}}
    >
        <div className='flex flex-col justify-between w-56 h-full'>
        <div className='w-full h-full'>
            <div className='text-xl font-semibold text-gray-600'>
            Sidecars
            </div>
            <div className='text-gray-400 '>
            Updated 15 minutes ago
            </div>
        </div>
        <div className='flex items-center flex-row gap-2 mb-2'>
            <Icons.alert color='rgb(209,213,219)' />
            <div className='text-sm text-gray-400'>
            12 New Logs since update
            </div>
        </div>
        </div>
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
    </div>
    <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4'
        style={{backgroundColor: '#eff6fd'}}
    >
        <div className='flex flex-col justify-between w-56 h-full'>
        <div className='w-full h-full'>
            <div className='text-xl font-semibold text-gray-600'>
            Logs
            </div>
            <div className='text-gray-400 '>
            Updated 15 minutes ago
            </div>
        </div>
        <div className='flex items-center flex-row gap-2 mb-2'>
            <Icons.alert color='rgb(209,213,219)' />
            <div className='text-sm text-gray-400'>
            12 New Logs since update
            </div>
        </div>
        </div>
        <div className='flex flex-col flex-1 h-full bg-white rounded-md w-72 pl-4'>
        <div className='ml-1 mt-4 text-sm'>Logs / Time</div>
        <div className=" flex-1 h-32 ">
            <BarChart />
        </div>
        <div className="ml-1 mb-8 mt-1 text-xs text-gray-400">Jan 2, 08:18:00</div>
        </div>
    </div>
    </div>
    </div>
)