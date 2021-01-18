export const treeData = {
  child: [
    {
      name: 'DOM&BOM',
      id: 'base',
      child: [
        {
          name: 'dom',
          id: 'dom',
          child: [
            {
              name: 'createElement',
              id: 'create',
              child: [
                {
                  name: 'outerHtml',
                  id: 'outer-html'
                }
              ]
            }
          ]
        },
        {
          name: 'bom',
          id: 'bom',
          child: [
            {
              name: 'localtion',
              id: 'localtion',
              child: [
                {
                  name: 'pathnane',
                  id: 'pathnane'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'ASYNC',
      id: 'async',
      child: [
        {
          name: 'fetch',
          id: 'fetch'
        },
        {
          name: 'promise',
          id: 'promise'
        },
        {
          name: 'generator',
          id: 'generator'
        },
      ]
    },
    {
      name: 'HTTP',
      id: 'http',
      child: [
        {
          name: 'cookie',
          id: 'cookie'
        },
        {
          name: 'session',
          id: 'session'
        },
        {
          name: 'websoket',
          id: 'websoket'
        },
      ]
    },
  ]
};