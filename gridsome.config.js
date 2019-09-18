// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
    siteName: 'Gridsome',
    plugins: [
      {
        use: "@gridsome/source-filesystem",
        options: {
          path: "articles/**/*.md",
          typeName: "ArticlePost",
          resolveAbsolutePaths: true,
          remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"]
          }
        }
      },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    transformers: {
      remark: {
        plugins: ["@gridsome/remark-prismjs"]
      }
    }
}