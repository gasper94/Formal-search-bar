'use client'

import React, {useState, useRef, useEffect} from 'react';
import {motion} from 'framer-motion';

// Types
import { Group, GroupMap } from '@/types/searchbar';

// Utils
import { cn } from "@/lib/utils"

// Components
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import { OptionsSection } from "../OptionSection/OptionSection";
import { Footer } from "../Footer/Footer";
import { MainSection } from '../MainSection/MainSection';
import { Blur } from '../BlurScreen/BlurScreen';

// CONSTANTS
import { collection, optionList, items, itemsW } from '../../Constants/ServicesSections/ServicesSections';

// Animations
const testingVariants = {
  initial: {
    // position: 'absolute',
    height: 60,
    width: '100%',
    left: '0', // Center the item horizontally
    right: '0', // Center the item horizontally
    zIndex: '50',
    padding: 3,
    borderRadius: 0
  },
  open: (y: any) => ({
    // position: 'absolute',
    height: '80%',
    width: '80%',
    top: '10%',
    left: '10%', // Adjust left to center the item horizontally
    right: '10%', // Adjust right to center the item horizontally
    zIndex: '50',
    padding: 3,
    borderRadius: 12
  }),
  closed: (y: any) => ({
    // position: 'absolute',
    height: 60,
    width: '100%',
    left: '0', // Center the item horizontally
    right: '0', // Center the item horizontally
    zIndex: '50',
    padding: 3,
    borderRadius: 0
  })
};

const body = {
  initial:{
    opacity: 0,
  },
  open: {
    opacity: 1,
    height: "100%",
    transition: {
      opacity: { duration: 0.6, ease: "easeInOut" } // Slower opacity transition
    }
  },
  close: {
    opacity: 0,
    height: "0%",
    transition: {
      opacity: { duration: 0.4, ease: "easeInOut" } // Slower opacity transition
    }
  }
};

const ButtonVariant = {
  open: {
    opacity: 0,
  },
  close: {
    opacity: 1,
  }
}

const inputVariant = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  }
}

const runCmdVariant = {
  close:{
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const searchCmdVariant = {
  close:{
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};


export const SearchBar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [_, setTrackerIndex] = useState<number>(0);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
    const [typing, setTyping] = useState<boolean>(false);
    const [optionFilter, setOptionFilter] = useState<string>('ALL');
    const [filteredCollection, setFilteredCollection] = useState<GroupMap>(collection);
    const [optionPointer, setOptionPointer] = useState<number>(1);
    const [inputValue, setInputValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        setTrackerIndex(0)
        
        // Handle input 
        setInputValue('')
        if(inputRef && inputRef.current){
          inputRef.current.blur();
          setTyping(false);
        }
      } else if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        setOpen(false);
        setTrackerIndex(0)
        setInputValue('')

        // Handle input 
        setInputValue('')
        if(inputRef && inputRef.current){
          inputRef.current.blur();
          setTyping(false);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {

    if(inputValue.length <= 0){
      // setInputValue('')
      setTrackerIndex(0);
      setTyping(false);
    }

    function updateOptionPointer(prevIndex: any) {
      if (prevIndex === optionList.size) {
        // If current index is the last item, reset to 0
        setOptionFilter(`${optionList.get("1")}`);
        return 1;
      } else {
        // Increment the index
        const nextIndex = prevIndex + 1;
        if (optionList.has(nextIndex.toString())) {
          setOptionFilter(`${optionList.get(nextIndex.toString())}`);
          return nextIndex;
        } else {
          return prevIndex;
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        console.log('typing: ', typing)
        setTrackerIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          console.log('filteredCollection:', filteredCollection)
          const nextItem = filteredCollection.get(nextIndex.toString());

          if (nextItem !== undefined) {
            setSelectedItemIndex(nextItem.id);
            return nextIndex;
          } else {
            return prevIndex;
          }
        });
      }else if (e.key === 'ArrowUp') {
        setTrackerIndex((prevIndex) => {
          const nextIndex = prevIndex - 1;
          console.log('filteredCollection:', filteredCollection)
          const nextItem = filteredCollection.get(nextIndex.toString());

          if (nextItem !== undefined) {
            setSelectedItemIndex(nextItem.id);
            return nextIndex;
          } else {
            return prevIndex;
          }
        })
      }else if (e.key === '/') {
        e.preventDefault();
        // Focus on the input field when '/' key is pressed
        if(inputRef && inputRef.current){
          setInputValue('/')
          inputRef.current.focus();
          setTyping(true)
        }
      }else   if (e.key === 'Tab') {
    e.preventDefault(); // Prevent default tab behavior

    setOptionPointer((prevIndex) => {
      return updateOptionPointer(prevIndex);
    });
    }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredCollection, typing, inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const handleBlurClose = () => {
    setOpen(false);
    setTrackerIndex(0)
    setInputValue('')
    setTyping(false);
  }

    return (
        <div>
            <Blur open={open} handleBlurClose={handleBlurClose}/>
         
            <motion.div
            initial={"initial"}
            animate={open ? 'open': 'closed'}
            variants={testingVariants}
            style={{position: 'absolute', backgroundColor: '#F2F5F9'}}
            >

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-16 z-30"
            >
                <motion.div
                initial={'initial'}
                animate={open ? ButtonVariant.open: ButtonVariant.close}
                variants={ButtonVariant}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                <Button
                    variant="outline"
                    className={cn(
                    "flex absolute w-full justify-between items-center text-sm text-muted-foreground px-12 top-0 left-0 right-0 z-30"
                    )}
                    style={{ height: "60px"}}
                    onClick={() => setOpen(true)}
                >
                    <span className="text-lg">Search for anything...</span>
                    <a className='flex justify-center items-center h-full bg-white px-4 rounded-xl gap-2 shadow-sm z-50' onClick={() => setOpen(true)}>
                    <Icons.grid className="h-5 w-5" color='black'/>
                    <kbd className='flex justify-center items-center gap-0.5 mt-0.5'>
                        <span className="text-xl text-black">⌘</span>
                        <span className='text-md text-black'>E</span>
                    </kbd>
                    </a>
                </Button>
                </motion.div>

                <motion.div
                animate={open ? inputVariant.open: inputVariant.close}
                variants={inputVariant}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                <Button
                    variant="outline"
                    style={{backgroundColor: '#E3E7ED'}}
                    className={cn(
                    "w-full text-sm text-muted-foreground top-0 left-0 h-16 rounded-xl"
                    )}
                >
                    <div className='flex justify-between items-center w-full h-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <Icons.search className="h-5 w-5" />
                        <input 
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleChange} 
                        className="text-lg bg-transparent z-50 outline-none w-96" 
                        placeholder="Find info, Ask questions or Run queries" 
                        />
                    </div>
                    <motion.div 
                        initial={'close'}
                        animate={false ? searchCmdVariant.open : searchCmdVariant.close}
                        variants={searchCmdVariant}
                        className='absolute right-4 flex justify-center items-center h-auto bg-white px-3 py-2 rounded-xl gap-2 shadow-sm'>
                        <span className='text-md text-gray-500 font-semibold'>
                            ⌥ run commands
                        </span>
                    </motion.div>
                    <motion.div 
                        initial={'open'}
                        animate={typing ? runCmdVariant.close : runCmdVariant.open}
                        variants={runCmdVariant}
                        className='absolute right-4 flex justify-center items-center h-auto bg-white px-3 py-2 rounded-xl gap-2 shadow-sm'
                    >
                        <span className='text-md text-gray-500 font-semibold'>
                        {`'/' for commands`}
                        </span>
                    </motion.div>
                    
                    </div>
                </Button>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={'initial'}
                animate={open ? body.open : body.close}
                variants={body}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='flex flex-col z-30'
            >
                <div className='flex flex-col h-[90%]'>
                <OptionsSection
                    typing={typing}
                    optionFilter={optionFilter}
                    setOptionFilter={setOptionFilter}
                />

                <MainSection 
                    typing={typing} 
                    optionFilter={optionFilter}
                    itemsW={itemsW}
                    items={items}
                    inputValue={inputValue}
                    selectedItemIndex={selectedItemIndex}
                />

                <Footer />
                </div>
            </motion.div>
            </motion.div>
        </div>
    )
}