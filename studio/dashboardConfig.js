export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4ffc10ab3cfa389f3e7322',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8qgtabem',
                  apiId: '7526a38f-d28b-4100-9400-e29473f719ce'
                },
                {
                  buildHookId: '5f4ffc103dac7936e40da721',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ct4re3by',
                  apiId: 'e1607218-a290-496a-97ce-ebdecd479e77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mahvlad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ct4re3by.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
