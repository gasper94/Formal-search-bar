import React, {useState} from 'react';
import {motion} from 'framer-motion';

// Assets
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";

// Types
import { OptionsProps, OptionsPropsx, CustomButtonProps } from '@/types/searchbar';

// Components
import { AiOptions } from "../AiOptions/AiOptions";

// Animations
const optionsVariant = {
  close:{
    height: 0,
    opacity: 0,
  },
  open: {
    opacity: 1,
    height: 100,
    // backgroundColor: 'red',
    transition: {
      opacity: { duration: 1, ease: "linear" } // Slower opacity transition
    }
  },
};

export const OptionsSection = ({ typing, optionFilter, setOptionFilter}: OptionsProps) => (
  <motion.div
    initial={'open'}
    animate={typing ? optionsVariant.close : optionsVariant.open }
    variants={optionsVariant}
  >
    {AiOptions()}
    <Options optionFilter={optionFilter} setOptionFilter={setOptionFilter}/>
  </motion.div>
)

const Options = ({ optionFilter, setOptionFilter }: OptionsPropsx) => {
  // State to track the selected button
  const [selectedAllButton, setSelectedAllButton] = useState<boolean>(true);
  const [selectedDataButton, setSelectedDataButton] = useState<boolean>(false);
  const [selectedSecurityButton, setSelectedSecurityButton] = useState<boolean>(false);
  const [selectedStoreButton, setSelectedStoreButton] = useState<boolean>(false);
  const [selectedToolsButton, setSelectedToolsButton] = useState<boolean>(false);
  const [selectedSettingsButton, setSelectedSettingsButton] = useState<boolean>(false);

  // Function to handle button click
  const handleAllButtonClick = () => {
    setSelectedAllButton((prev) => !prev);

    setSelectedSecurityButton(false);
    setSelectedDataButton(false);
    setSelectedStoreButton(false);
    setSelectedToolsButton(false);
    setSelectedSettingsButton(false);
    setOptionFilter('ALL');
  };

  // Function to handle button click
  const handleDataButtonClick = () => {
    setSelectedDataButton((prev) => !prev);

    setSelectedAllButton(false);
    setSelectedStoreButton(false);
    setSelectedToolsButton(false);
    setSelectedSettingsButton(false);
    setSelectedSecurityButton(false);
    setOptionFilter('DATA');
  };

  // Function to handle button click
  const handleSecurityButtonClick = () => {
    setSelectedSecurityButton((prev) => !prev);

    setSelectedAllButton(false);
    setSelectedDataButton(false);
    setSelectedStoreButton(false);
    setSelectedToolsButton(false);
    setSelectedSettingsButton(false);
    setOptionFilter('SECURITY');
  };

  // Function to handle button click
  const handleStoreButtonClick = () => {
    setSelectedStoreButton((prev) => !prev);


    setSelectedAllButton(false);
    setSelectedDataButton(false);
    setSelectedToolsButton(false);
    setSelectedSettingsButton(false);
    setSelectedSecurityButton(false);
    setOptionFilter('STORE');
  };

  // Function to handle button click
  const handleToolsButtonClick = () => {
    setSelectedToolsButton((prev) => !prev);

    setSelectedAllButton(false);
    setSelectedDataButton(false);
    setSelectedStoreButton(false);
    setSelectedSettingsButton(false);
    setSelectedSecurityButton(false);
    setOptionFilter('TOOLS');
  };

    // Function to handle button click
  const handleSettingsButtonClick = () => {
    setSelectedSettingsButton((prev) => !prev);

    setSelectedAllButton(false);
    setSelectedDataButton(false);
    setSelectedStoreButton(false);
    setSelectedToolsButton(false);
    setSelectedSecurityButton(false);
    setOptionFilter('SETTINGS');
  };

  return(
    <div className="flex justify-between items-center px-3 bg-transparent h-12 ">
      <div className='flex flex-row gap-2'>
        <CustomButton label='All' selected={optionFilter === "ALL"} handleButtonClick={handleAllButtonClick}>
          <></>
        </CustomButton>
        <CustomButton label='Data' selected={optionFilter === "DATA"} handleButtonClick={handleDataButtonClick}>
          <Icons.data className="h-7 w-7" color={optionFilter === "DATA" ? 'white' : 'black'} />
        </CustomButton>
        <CustomButton label='Security' selected={optionFilter === "SECURITY"} handleButtonClick={handleSecurityButtonClick}>
          <Icons.lock className="h-7 w-7" />
        </CustomButton>
        <CustomButton label='Store' selected={optionFilter === "STORE"} handleButtonClick={handleStoreButtonClick}>
          <Icons.puzzle className="h-7 w-7"/>
        </CustomButton>
        <CustomButton label='Tools' selected={optionFilter === "TOOLS"} handleButtonClick={handleToolsButtonClick}>
          <Icons.tools className="h-7 w-7" color='blue'/>
        </CustomButton>
        <CustomButton label='Settings' selected={optionFilter === "SETTINGS"} handleButtonClick={handleSettingsButtonClick}>
          <Icons.settings className="h-7 w-7 bg-black" />
        </CustomButton>
      </div>
      <div>
        <div className='flex justify-center items-center h-8 bg-white px-3 py-2 rounded-xl gap-2 shadow-md border-gray-200 border-[0.5px]'>
          <Icons.leftAndRightArrows className="h-7 w-7" color={'black'} />
          <span 
          onClick={() => setOptionFilter('SECURITY')}
          className='text-md text-gray-500 font-semibold'>tabs</span>
        </div>
      </div>
    </div>
  )
}

function CustomButton({ children, label, selected, handleButtonClick }: CustomButtonProps) {
  return (
    <Button
      className={`flex flex-row items-center gap-2 py-2 px-4 rounded-2xl text-sm border-[1px] shadow-sm ${selected ? 'bg-black text-white' : 'bg-white text-black'} border-gray-200`}
      onClick={handleButtonClick}
    >
      {children}
      <span className='text-md font-semibold pr-1'>{label}</span>
    </Button>
  );
}