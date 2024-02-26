// Managing menus. need to expand for commands after pressing '/'

export const collection = new Map([
  ['1', {group: 'DATA', id: 786532}],
  ['2', {group: 'DATA', id: 902134}],
  ['3', {group: 'DATA', id: 345621}],
  ['4', {group: 'DATA', id: 512497}],
  ['5', {group: 'SECURITY', id: 673829}],
  ['6', {group: 'SECURITY', id: 219876}],
  ['7', {group: 'SECURITY', id: 943567}],
  ['8', {group: 'SECURITY', id: 187643}],
  ['9', {group: 'SECURITY', id: 539218}],
  ['10', {group: 'STORE', id: 624935}],
  ['11', {group: 'STORE', id: 820374}],
  ['12', {group: 'STORE', id: 365984}],
  ['13', {group: 'STORE', id: 751290}],
  ['14', {group: 'STORE', id: 498763}],
  ['15', {group: 'STORE', id: 127543}],
  ['16', {group: 'STORE', id: 682934}],
  ['17', {group: 'TOOLS', id: 348912}],
  ['18', {group: 'TOOLS', id: 572631}],
  ['19', {group: 'TOOLS', id: 916345}],
]);

export const optionList = new Map([
  ['1', 'ALL'],
  ['2', 'DATA'],
  ['3', 'SECURITY'],
  ['4', 'STORE'],
  ['5', 'TOOLS'],
  ['6', 'SETTINGS'],
])

export const items = [
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

export const itemsW = [
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
