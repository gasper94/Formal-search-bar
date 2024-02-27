import { motion } from 'framer-motion' 

// Types
import { BlurProps } from "@/types/searchbar"
 
// Animation
const BackgroundVariant = {
  initial:{
    height: '0%',
    width: '100%'
  },
  open: {
    height: '100%',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: { delay: 0.05 },
    width: '100%'
  },
  close: {
    height: '0%',
    transition: { delay: 0.2 },
    width: '100%'
  }
}

export const Blur = ({ open, handleBlurClose }: BlurProps) => (
    <motion.div
      initial={"initial"}
      animate={open ? 'open': 'closed'}
      variants={BackgroundVariant}
      style={{position: 'absolute', zIndex: '40'}}
      onClick={handleBlurClose}
    >
    </motion.div>
)