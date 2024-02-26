
import { Icons } from "@/components/icons"

// Note: TODO: This have repetetive code cna reduce. 

export const iconMapping: { [key: string]: React.ReactNode } = {
  Catalog: <Icons.folder className="h-7 w-7" color='white' />,
  Observability: <Icons.eye className="h-7 w-7" color='white' />,
  Lineage: <Icons.LineageIcon className="h-7 w-7" color='white' />,
  ETL: <Icons.ETLIcon className="h-7 w-7" color='white' />,
  Access: <Icons.AccessIcon className="h-7 w-7" color='white' />,
  Logs: <Icons.LogsIcon className="h-7 w-7" color='white' />,
  Discovery: <Icons.DiscoveryIcon className="h-7 w-7" color='white'/>,
  Policies: <Icons.PoliciesIcon className="h-7 w-7" color='white' />,
  Compliance: <Icons.DiscoveryIcon className="h-7 w-7" color='white' />,
  AWS: <Icons.AWSIcon className="h-7 w-7" color='white' />,
  Datalog: <Icons.DatalogIcon className="h-7 w-7" color='white' />,
  Splunk: <Icons.SplunkIcon className="h-7 w-7" color='white' />,
  S3: <Icons.S3Icon className="h-7 w-7" color='white' />,
  Github: <Icons.GithubIcon className="h-7 w-7" color='white' />,
  Datahub: <Icons.DatahubIcon className="h-7 w-7" color='white' />,
  'Manage Store Apps': <Icons.ManageStoreAppsIcon className="h-7 w-7" color='white' />,
  'API Keys': <Icons.APIKeysIcon className="h-7 w-7" color='white' />,
  Sigma: <Icons.SigmaIcon className="h-7 w-7" color='white' />,
  Workflow: <Icons.WorkflowIcon className="h-7 w-7" color='white' />,
  CmdCatalog: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>C</span>
  </>,
  CmdObservability: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>O</span>
  </>,
  CmdLineage: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>L</span>
  </>,
  CmdETL: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>E</span>
  </>,
  CmdAccess: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>A</span>
  </>,
  CmdLogs: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>G</span>
  </>,
  CmdDiscovery: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>D</span>
  </>,
  CmdPolicies: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>P</span>
  </>,
  CmdCompliance: <>
    <div>⌥</div>
    <span className='text-md text-gray-500 font-semibold'>Q</span>
  </>,
  CmdAWS: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>A</span>
  </>,
  CmdDatalog: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>D</span>
  </>,
  CmdSplunk: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>S</span>
  </>,
  CmdS3: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>3</span>
  </>,
  CmdGithub: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>G</span>
  </>,
  CmdDatahub: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>H</span>
  </>,
  CmdManageStoreApps: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>S</span>
  </>,
  CmdAPIKeys: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>K</span>
  </>,
  CmdSigma: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>S</span>
  </>,
  CmdWorkflow: <>
    <div>⌥</div>
    <Icons.ArrowUp className="h-7 w-7" color={'gray'} />
    <span className='text-md text-gray-500 font-semibold'>W</span>
  </>,
};