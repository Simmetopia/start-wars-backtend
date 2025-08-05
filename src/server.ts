import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';

const yoga = createYoga({
  schema,
});

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/am_i_ok') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    yoga(req, res); // Let Yoga handle everything else
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
