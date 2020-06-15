const { readFileSync } = require('fs')

module.exports = {
  // Show the custom 404 page in development:
  // https://www.11ty.dev/docs/quicktips/not-found/

  callbacks: {
    ready: function(error, browserSync) {
      if (error) {
        console.error(error)
      }

      browserSync.addMiddleware("*", (req, res) => {
        const notFoundPage = readFileSync('_site/404.html')

        // Provides the 404 content without redirect.
        res.write(notFoundPage)

        // Add 404 http status code in request header.
        res.writeHead(404, { "Content-Type": "text/html" });
        res.writeHead(404)
        res.end()
      })
    }
  }
}
