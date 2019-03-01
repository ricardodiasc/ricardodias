module.exports = {
    siteMetadata: {
        name: `Ricardo Dias`,
        description: `Web and Game Development`,
        tagline: `Web and Game Development`
    },
    plugins : [
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}
