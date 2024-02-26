import { Icons } from "@/components/icons"

// Types
import { CommonCardProps } from "@/types/dashboard";

export const CommonCard = ({ title, subtitle, details, children }: CommonCardProps) => (
     <>
        <div className='text-2xl text-gray-800 font-semibold mb-2 mt-4'>Recent</div>
            <div className='flex flex-row h-56 w-full gap-4 overflow-x-auto overflow-y-hidden'>
        <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4' style={{ backgroundColor: '#eff6fd' }}>
            <div className='flex flex-col justify-between w-56 h-full'>
                <div className='w-full h-full'>
                    <div className='text-xl font-semibold text-gray-600'>{title}</div>
                    <div className='text-gray-400'>{subtitle}</div>
                </div>
                <div className='flex items-center flex-row gap-2 mb-2'>
                    <Icons.alert color='rgb(209,213,219)' />
                    <div className='text-sm text-gray-400'>{details}</div>
                </div>
            </div>
                {children}
        </div>
        </div>
    </>
);