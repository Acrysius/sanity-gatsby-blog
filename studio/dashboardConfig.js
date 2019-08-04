export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d46d7b2c48c984a5230eace',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8eqfny27',
                  apiId: '1b4c74c9-4552-4581-8d5f-ef20c92df86b'
                },
                {
                  buildHookId: '5d46d7b2da1f7a449020ed0e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bbgskcza',
                  apiId: '71ce3012-0a51-46f5-b1dd-9b84ee84c0bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Acrysius/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bbgskcza.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
