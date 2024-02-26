import {motion} from 'framer-motion'

// Assets
import { Icons } from "@/components/icons"

export const Footer = () => (
    <div className='flex flex-row justify-between p-4'>
    <div>
    <div className='flex flex-row items-center gap-2 text-gray-400'>
        <div className='bg-white px-3 py-2 rounded-lg'>
        <motion.div
            animate={{ rotate: 90 }}
        >
            <Icons.leftAndRightArrows className="h-7 w-7" color='gray' />
        </motion.div>
        </div>
        Move
    </div>
    </div>
    <div className='flex flex-row justify-between gap-4 text-gray-400'>
    <div className='flex flex-row items-center gap-2'>
        <div className='bg-white px-4 py-3 rounded-lg'>
            <Icons.enter color='gray' />
        </div>
        Open
    </div>
    <div className='flex flex-row items-center gap-2text-gray-400'>
        <div className='flex flex-row items-center gap-2'>
        <div className='bg-white px-3 py-2 rounded-lg'>
            esc
        </div>
        Close
        </div>
    </div>
    </div>
    </div>
)