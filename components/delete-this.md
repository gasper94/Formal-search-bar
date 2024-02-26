
        <motion.div 
          animate={open ? Cardvariants.open(80): "closed"}
          variants={Cardvariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-16"
        >
         <Button
          variant="outline"
          className={cn(
            "flex relative w-full justify-between items-center text-sm text-muted-foreground h-full px-12"
          )}
          onClick={() => setOpen(true)}
          {...props}
        >
          <span className="text-lg">Search for anything...</span>
          <div className='flex justify-center items-center h-full bg-white px-4 rounded-xl gap-2'>
            <LayoutGridIcon className="h-5 w-5 text-black" />
            <kbd className='flex justify-center items-center gap-0.5 mt-0.5'>
              <span className="text-xl text-black">⌘</span>
              <span className='text-md text-black'>E</span>
            </kbd>
          </div>
        </Button>
        </motion.div>



const Cardvariants = {
  open: (y: any) => ({
    opacity: 1,
    y: 80, // Apply vertical displacement
    width: `${y}%`, // Invert the width calculation
    marginLeft: `${(100 - y) / 2}%`, // Invert the left margin
    marginRight: `${(100 - y) / 2}%`, // Invert the right margin
  }),
  closed: {
    opacity: 0,
    y: 0, // Reset vertical displacement
    width: '100%',
    marginLeft: 0, // Resetting left margin
    marginRight: 0, // Resetting right margin
  }
};



 <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>





{/* <motion.div 
            initial={"initial"}
            animate={open ? variants.open(20): variants.closed(0)}
            variants={variants}
            style={{backgroundColor: '#F2F5F9'}}
            className="flex flex-col absolute z-50"
          >
            
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-16"
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
                "flex absolute w-full justify-between items-center text-sm text-muted-foreground px-12 top-0 left-0 right-0 h-16"
              )}
              style={{backgroundColor: '#F2F5F9'}}
              onClick={() => setOpen(true)}
              {...props}
              >
              <span className="text-lg">Search for anything...</span>
              <div className='flex justify-center items-center h-full bg-white px-4 rounded-xl gap-2 shadow-sm'>
                <LayoutGridIcon className="h-5 w-5 text-black" />
                <kbd className='flex justify-center items-center gap-0.5 mt-0.5'>
                  <span className="text-xl text-black">⌘</span>
                  <span className='text-md text-black'>E</span>
                </kbd>
              </div>
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
              onClick={() => setOpen(true)}
              {...props}
              >
                <div className='flex justify-between items-center w-full h-full'>
                  <div className='flex flex-row items-center gap-2'>
                    <Icons.search className="h-5 w-5" />
                    <span className="text-lg">Find info, Ask questions or Run queries</span>
                  </div>
                  <div className='flex justify-center items-center h-auto bg-white px-3 py-2 rounded-xl gap-2 shadow-sm'>
                      <span className='text-md text-gray-500 font-semibold'>'/' for commands</span>
                  </div>
                </div>
              </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={'initial'}
              animate={open ? body.open : body.close}
              variants={body}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='flex flex-col flex-1'
            >
              {AiOptions()}
              <div className="flex justify-between items-center px-3 bg-transparent h-12 ">
                <div className='flex flex-row gap-2'>
                <div>
                  <div className='flex flex-row items-center gap-2 bg-white py-2 px-4 rounded-2xl text-sm border-gray-200 border-[1px]'>
                    <span className='text-md text-black font-semibold pr-1'>All</span>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row items-center gap-2 bg-white py-2 px-2 pr-3 pl-3 rounded-2xl text-sm border-gray-200 border-[1px]'>
                    <Icons.data className="h-7 w-7" />
                    <span className='text-md text-black font-semibold pr-1'>Data</span>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row items-center gap-1 bg-white py-2 px-2 pr-3 pl-3 rounded-2xl text-sm border-gray-200 border-[1px] shadow-sm'>
                    <Icons.lock className="h-7 w-7" />
                    <span className='text-md text-black font-semibold pr-1'>Security</span>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row items-center gap-2 bg-white py-2 px-2 pr-3 pl-2 rounded-2xl text-sm border-gray-200 border-[1px] shadow-sm'>
                    <Icons.puzzle className="h-7 w-7"/>
                    <span className='text-md text-black font-semibold pr-1'>Store</span>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row items-center gap-2 bg-white py-2 px-2 pr-3 pl-3 rounded-2xl text-sm border-gray-200 border-[1px] shadow-sm'>
                    <Icons.tools className="h-7 w-7" color='blue'/>
                    <span className='text-md text-black font-semibold pr-1'>Tools</span>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row items-center gap-2 bg-white py-2 px-2 pr-3  rounded-2xl text-sm border-gray-200 border-[1px] shadow-sm'>
                    <Icons.settings className="h-7 w-7 bg-black" />
                    <span className='text-md text-black font-semibold pr-1'>Settings</span>
                  </div>
                </div>
                </div>
                <div>
                  <div className='flex justify-center items-center h-8 bg-white px-3 py-2 rounded-xl gap-2 shadow-md border-gray-200 border-[0.5px]'>
                    <Icons.leftAndRightArrows className="h-7 w-7" color={'black'} />
                    <span className='text-md text-gray-500 font-semibold'>tabs</span>
                  </div>
                </div>
              </div>
              <div className='flex-1' style={{ overflowY: 'auto', maxHeight: '325px' }}>
                 <ItemList items={items} />
              </div>
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
            </motion.div>
            
          </motion.div> */}



<!-- Working version -->

"use client"

import '../styles/globals.css'; // Import global stylesheet
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"

// Utils
import { cn } from "@/lib/utils"

// Components
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {BarChart} from "@/components/graphs/barChart"
import {HeatmapChart} from "@/components/graphs/heatMap"

// Components 
import { AiOptions } from "../components/AiOptions/AiOptions";
import { ItemList } from '../components/ItemList/ItemList';

// CONSTANTS
import { collection, optionList } from '../components/Constants/ServicesSections/ServicesSections';

const items = [
  {
    id: 91,
    title: 'DATA',
    sectionColor: '#4E70ED',
    subItems: [
      { id: 786532, title: 'Catalog', description: 'Description of application', cmd: 'CmdCatalog'},
      { id: 902134, title: 'Observability', description: 'Description of application', cmd: 'CmdObservability'},
      { id: 345621, title: 'Lineage', description: 'Description of application', cmd: 'CmdLineage'},
      { id: 512497, title: 'ETL', description: 'Description of application',cmd: 'CmdETL'},
    ]
  },
  {
    id: 92,
    title: 'SECURITY',
    sectionColor: '#2924C0',
    subItems: [
      { id: 673829, title: 'Access', description: 'Description of application',cmd: 'CmdAccess'  },
      { id: 219876, title: 'Logs', description: 'Description of application',cmd: 'CmdLogs'  },
      { id: 943567, title: 'Discovery', description: 'Description of application',cmd: 'CmdDiscovery'  },
      { id: 187643, title: 'Policies', description: 'Description of application',cmd: 'CmdPolicies'  },
      { id: 539218, title: 'Compliance', description: 'Description of application',cmd: 'CmdCompliance'  },
    ]
  },
  {
    id: 93,
    title: 'STORE',
    sectionColor: '#4D5665',
    subItems: [
      { id: 624935, title: 'AWS', description: 'Description of application',cmd: 'CmdAWS' },
      { id: 820374, title: 'Datalog', description: 'Description of application',cmd: 'CmdDatalog' },
      { id: 365984, title: 'Splunk', description: 'Description of application',cmd: 'CmdSplunk' },
      { id: 751290, title: 'S3', description: 'Description of application',cmd: 'CmdS3' },
      { id: 498763, title: 'Github', description: 'Description of application',cmd: 'CmdGithub' },
      { id: 127543, title: 'Datahub', description: 'Description of application',cmd: 'CmdDatahub' },
      { id: 682934, title: 'Manage Store Apps', description: 'Description of application',cmd: 'CmdManageStoreApps' },
    ]
  },
  {
    id: 94,
    title: 'TOOLS',
    sectionColor: '#7280E2',
    subItems: [
      { id: 348912, title: 'API Keys', description: 'Description of application',cmd: 'CmdAPIKeys'  },
      { id: 572631, title: 'Sigma', description: 'Description of application',cmd: 'CmdSigma'  },
      { id: 916345, title: 'Workflow', description: 'Description of application',cmd: 'CmdWorkflow'  },
    ]
  }
];
const itemsW = [
  {
    id: 91,
    title: 'DATA',
    sectionColor: 'gray',
    subItems: [
      { id: 786532, title: 'Catalog', description: 'Description of application', cmd: 'CmdCatalog', description2: 'Search the data catalog for datasets using a keyword.', keywordType1: ['Keyword'], keywordType2: []},
      { id: 902134, title: 'Observability', description: 'Description of application', cmd: 'CmdObservability', description2: 'Check the obserbability status of a specific dataset.', keywordType1: ['Dataset'], keywordType2: [] },
      // { id: 345621, title: 'Lineage', description: 'Description of application', cmd: 'CmdLineage', description2: 'Does something else', keywordType1: [], keywordType2: [] },
      { id: 512497, title: 'ETL', description: 'Description of application',cmd: 'CmdETL', description2: 'Run an ETL job by specifing its name.', keywordType1: ['Job Name'], keywordType2: [] },
    ]
  },
  {
    id: 92,
    title: 'SECURITY',
    sectionColor: 'gray',
    subItems: [
      { id: 673829, title: 'Access', description: 'Description of application',cmd: 'CmdAccess', description2: 'Grant access to a specific user for a resource.', keywordType1: ['User'], keywordType2: ['Resource']  },
      { id: 219876, title: 'Logs', description: 'Description of application',cmd: 'CmdLogs', description2: 'View Security logs for a specific date and log type.', keywordType1: ['Data'], keywordType2: ['Type']  },
      // { id: 943567, title: 'Discovery', description: 'Description of application',cmd: 'CmdDiscovery', description2: '', keywordType1: ['Keyword'], keywordType2: ['Resource']  },
      { id: 187643, title: 'Policies', description: 'Description of application',cmd: 'CmdPolicies', description2: 'Create a security policy with specified rules.', keywordType1: ['PolicyName'], keywordType2: ['Rules']  },
      // { id: 539218, title: 'Compliance', description: 'Description of application',cmd: 'CmdCompliance', description2: '', keywordType1: ['Keyword'], keywordType2: ['Resource']  },
    ]
  },
  {
    id: 94,
    title: 'TOOLS',
    sectionColor: 'gray',
    subItems: [
      { id: 348912, title: 'API Keys', description: 'Description of application',cmd: 'CmdAPIKeys', description2: 'Create an API key with given name.', keywordType1: ['Name'], keywordType2: []   },
      { id: 572631, title: 'Sigma', description: 'Description of application',cmd: 'CmdSigma', description2: 'Analyze data using Sigma notation.', keywordType1: ['Query'], keywordType2: []   },
      { id: 916345, title: 'Workflow', description: 'Description of application',cmd: 'CmdWorkflow', description2: 'Start a workflow by specifying its name.', keywordType1: ['workflow'], keywordType2: [] },
    ]
  }
];

const itemx = [
  {
    id: 91,
    title: 'DATA',
    sectionColor: '#4E70ED',
    subItems: [
      { id: 786532, title: 'Catalogx', description: 'Description of application', cmd: 'CmdCatalog'},
      { id: 902134, title: 'Observability', description: 'Description of application', cmd: 'CmdObservability' },
      { id: 345621, title: 'Lineage', description: 'Description of application', cmd: 'CmdLineage' },
      { id: 512497, title: 'ETL', description: 'Description of application',cmd: 'CmdETL' },
    ]
  },
  {
    id: 92,
    title: 'SECURITY',
    sectionColor: '#2924C0',
    subItems: [
      { id: 673829, title: 'Access', description: 'Description of application',cmd: 'CmdAccess'  },
      { id: 219876, title: 'Logs', description: 'Description of application',cmd: 'CmdLogs'  },
      { id: 943567, title: 'Discovery', description: 'Description of application',cmd: 'CmdDiscovery'  },
      { id: 187643, title: 'Policies', description: 'Description of application',cmd: 'CmdPolicies'  },
      { id: 539218, title: 'Compliance', description: 'Description of application',cmd: 'CmdCompliance'  },
    ]
  },
  {
    id: 93,
    title: 'STORE',
    sectionColor: '#4D5665',
    subItems: [
      { id: 624935, title: 'AWS', description: 'Description of application',cmd: 'CmdAWS' },
      { id: 820374, title: 'Datalog', description: 'Description of application',cmd: 'CmdDatalog' },
      { id: 365984, title: 'Splunk', description: 'Description of application',cmd: 'CmdSplunk' },
      { id: 751290, title: 'S3', description: 'Description of application',cmd: 'CmdS3' },
      { id: 498763, title: 'Github', description: 'Description of application',cmd: 'CmdGithub' },
      { id: 127543, title: 'Datahub', description: 'Description of application',cmd: 'CmdDatahub' },
      { id: 682934, title: 'Manage Store Apps', description: 'Description of application',cmd: 'CmdManageStoreApps' },
    ]
  },
  {
    id: 94,
    title: 'TOOLS',
    sectionColor: '#7280E2',
    subItems: [
      { id: 348912, title: 'API Keys', description: 'Description of application',cmd: 'CmdAPIKeys'  },
      { id: 572631, title: 'Sigma', description: 'Description of application',cmd: 'CmdSigma'  },
      { id: 916345, title: 'Workflow', description: 'Description of application',cmd: 'CmdWorkflow'  },
    ]
  }
];

function LayoutGridIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

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

const BackgroundVariant = {
  initial:{
    // backdropFilter: 'blur(0px)',
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
    // backdropFilter: 'blur(0px)',
    transition: { delay: 0.2 },
    width: '100%'
  }
}

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

const secondDescription = {
  close:{
    width: 0,
    opacity: 0,
    // backgroundColor: 'purple',
  },
  open: {
    opacity: 1,
    width: '100%',
    // backgroundColor: 'purple',
    transition: {
      opacity: { duration: 0.5, ease: "linear" } // Slower opacity transition
    }
  },
};

const cmdOptionsVariant = {
  close:{
    height: 0,
    width: 0,
    opacity: 0,
    // backgroundColor: 'red',
  },
  open: {
    opacity: 1,
    height: "100%",
    width: "100%",
    // backgroundColor: 'red',
    transition: {
      opacity: { duration: 1, ease: "linear" } // Slower opacity transition
    }
  },
};

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

function CustomButton({ children, label, selected, handleAllButtonClick }: any) {

  // const handleClick = () => {
  //   setSelected(!selected);
  // };

  return (
    <Button
      className={`flex flex-row items-center gap-2 py-2 px-4 rounded-2xl text-sm border-[1px] shadow-sm ${selected ? 'bg-black text-white' : 'bg-white text-black'} border-gray-200`}
      onClick={handleAllButtonClick}
    >
      {children}
      <span className='text-md font-semibold pr-1'>{label}</span>
    </Button>
  );
}

const Options = ({ optionFilter, setOptionFilter }: any) => {
  // State to track the selected button
  const [selectedAllButton, setSelectedAllButton] = useState(true);
  const [selectedDataButton, setSelectedDataButton] = useState(false);
  const [selectedSecurityButton, setSelectedSecurityButton] = useState(false);
  const [selectedStoreButton, setSelectedStoreButton] = useState(false);
  const [selectedToolsButton, setSelectedToolsButton] = useState(false);
  const [selectedSettingsButton, setSelectedSettingsButton] = useState(false);

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
        <CustomButton label='All' selected={optionFilter === "ALL"} handleAllButtonClick={handleAllButtonClick}/>
        <CustomButton label='Data' selected={optionFilter === "DATA"} handleAllButtonClick={handleDataButtonClick}>
          <Icons.data className="h-7 w-7" color={optionFilter === "DATA" ? 'white' : 'black'} />
        </CustomButton>
        <CustomButton label='Security' selected={optionFilter === "SECURITY"} handleAllButtonClick={handleSecurityButtonClick}>
          <Icons.lock className="h-7 w-7" />
        </CustomButton>
        <CustomButton label='Store' selected={optionFilter === "STORE"} handleAllButtonClick={handleStoreButtonClick}>
          <Icons.puzzle className="h-7 w-7"/>
        </CustomButton>
        <CustomButton label='Tools' selected={optionFilter === "TOOLS"} handleAllButtonClick={handleToolsButtonClick}>
          <Icons.tools className="h-7 w-7" color='blue'/>
        </CustomButton>
        <CustomButton label='Settings' selected={optionFilter === "SETTINGS"} handleAllButtonClick={handleSettingsButtonClick}>
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

export function SiteHeader({ ...props }) {
  const [open, setOpen] = React.useState(false)
  const [_, setTrackerIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState<any>(0);
  const [typing, setTyping] = useState(false);
  const [optionFilter, setOptionFilter] = useState('ALL');
  const [filteredCollection, setFilteredCollection] = useState<any>(collection);
  const [testingOption, setTestingOption] = useState("SECURITY");

  const [optionPointer, setOptionPointer] = useState(1);

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

  // function filterByGroup(collection: any, group: any): any {
  //   const filteredItems: any = [];
  //   const filteredIds: any = [];
  //   for (const [key, value] of collection) {
  //     if (value.group === group) {
  //       filteredItems.push([key, value]);
  //       filteredIds.push(key)
  //     }
  //   }
  //    const filteredMap = new Map(filteredItems);
  //    setFilteredCollection(filteredMap);
  //   return [filteredMap, filteredIds];
  // }

  useEffect(() => {
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
          setFilteredCollection(items)
          inputRef.current.focus();
          setTyping(true)
        }
      }else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setOptionPointer((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (optionList.has(nextIndex.toString())) {
              // console.log(optionList.get(nextIndex.toString()));
              // const [filteredMap, filteredIds] = filterByGroup(collection, `${optionList.get(nextIndex.toString())}`);
              // console.log('hey', filteredMap);
              
              // console.log("filteredIds:", filteredIds[0]);
              // setSelectedItemIndex(filteredIds[0]);
              setOptionFilter(`${optionList.get(nextIndex.toString())}`);
              
              return nextIndex;
            } else {
              return prevIndex;
            }
          });
          // console.log('collection:', filteredCollection);
      }else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          
          setOptionPointer((prevIndex) => {
            const nextIndex = prevIndex - 1;
            if (optionList.has(nextIndex.toString())) {
              
              // console.log(optionList.get(nextIndex.toString()))
              // const filteredItems = filterByGroup(collection, `${optionList.get(nextIndex.toString())}`);
              // console.log('hey', filteredItems)
              // setFilteredCollection(filteredItems[0])
              // console.log("filteredIds:", filteredItems[1][0]);
              // setSelectedItemIndex(filteredItems[1][0]);


              setOptionFilter(`${optionList.get(nextIndex.toString())}`);
              return nextIndex;
            } else {
              return prevIndex;
            }
          });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };



  // const runCommand = React.useCallback((command: () => unknown) => {
  //   setOpen(false)
  //   command()
  // }, [])

  return (
      <div className='h-screen w-full'>
          <motion.div
            initial={"initial"}
            animate={open ? 'open': 'closed'}
            variants={BackgroundVariant}
            style={{position: 'absolute', zIndex: '40'}}
          >
          </motion.div>

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
                "flex absolute w-full justify-between items-center text-sm text-muted-foreground px-12 top-0 left-0 right-0"
              )}
              style={{ height: "60px"}}
              onClick={() => setOpen(true)}
              {...props}
              >
              <span className="text-lg">Search for anything...</span>
              <div className='flex justify-center items-center h-full bg-white px-4 rounded-xl gap-2 shadow-sm'>
                <LayoutGridIcon className="h-5 w-5 text-black" />
                <kbd className='flex justify-center items-center gap-0.5 mt-0.5'>
                  <span className="text-xl text-black">⌘</span>
                  <span className='text-md text-black'>E</span>
                </kbd>
              </div>
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
              // onClick={() => setOpen(true)}
              {...props}
              >
                <div className='flex justify-between items-center w-full h-full'>
                  <div className='flex flex-row items-center gap-2'>
                    <Icons.search className="h-5 w-5" />
                    {/* <span className="text-lg">Find info, Ask questions or Run queries</span> */}
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
                      '/' for commands
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
              className='flex flex-col z-30 h-4/5'
            >
              <div className='flex flex-col h-[90%]'>
                <motion.div
                  initial={'open'}
                  animate={typing ? optionsVariant.close : optionsVariant.open }
                  variants={optionsVariant}
                >
                  {AiOptions()}
                  <Options optionFilter={optionFilter} setOptionFilter={setOptionFilter}/>
                </motion.div>

                <div className='flex-1 ' style={{ overflowY: 'auto' }}>
                  <div>
                    {typing ?
                      <ItemList optionFilter={optionFilter} items={itemsW} selectedSubItem={selectedItemIndex} typing={typing}/>
                    :  
                      <ItemList optionFilter={optionFilter} items={items} selectedSubItem={selectedItemIndex} typing={typing}/>
                    }
                  </div>
                </div>

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

              </div>
            </motion.div>
            
          </motion.div>

        <div className="flex flex-col items-center justify-center flex-1 w-full h-full bg-gradient-to-t from-blue-200 gap-16">
          <div className='h-56 w-full pl-12'>
            <div className='text-2xl text-gray-800 font-semibold mb-2 mt-4'>Recent</div>
            <div className='flex flex-row h-56 w-full gap-4 overflow-x-auto overflow-y-hidden'>
              <div className='flex flex-row items-center min-w-auto rounded-2xl border-gray-200 border-[0.5px] shadow-sm py-4 px-4' style={{backgroundColor: '#eff6fd'}}>
                <div className='flex flex-col justify-between w-56 h-full'>
                  <div className='w-full h-full'>
                    <div className='text-xl font-semibold text-gray-600'>Logs</div>
                    <div className='text-gray-400'>Updated 15 minutes ago</div>
                  </div>
                  <div className='flex items-center flex-row gap-2 mb-2'>
                    <Icons.alert color='rgb(209,213,219)' />
                    <div className='text-sm text-gray-400'>12 New Logs since update</div>
                  </div>
                </div>
                <div className='flex flex-col flex-1 h-full bg-white rounded-md w-72 pl-4'>
                  <div className='ml-1 mt-4 text-sm  text-gray-600'>Logs / Time</div>
                  <div className='flex-1 h-32'>
                    <BarChart />
                  </div>
                  <div className='ml-1 mb-8 mt-1 text-xs text-gray-400'>Jan 2, 08:18:00</div>
                </div>
              </div>
            </div>
          </div>

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

      </div>
      </div> // make this an header later
  )
}
