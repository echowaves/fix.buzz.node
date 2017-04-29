'use strict'

export default (title =>
  `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/style/style.css">
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
        </head>
        <body>
          <div class="container"></div>
          <script type="text/javascript" src="bundle.js"></script>
        </body>
      </html>
      `
    )
