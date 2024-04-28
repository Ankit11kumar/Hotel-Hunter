import express from 'express';
import path from 'path';
import { appMarkup, preloadedState } from './dom';

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get('*', (req, res) => {
  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end(`
    <html>
      <head>
        <title>SSR with Redux</title>
      </head>
      <body>
        <div id="root">${appMarkup(req.url)}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./app.bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
