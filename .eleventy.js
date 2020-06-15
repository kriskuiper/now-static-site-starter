const use404 = require('./lib/use-404')

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html')

  eleventyConfig.setBrowserSyncConfig(use404)

  return {
    dir: {
      input: "src/site",
      data: "_data",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  }
}
