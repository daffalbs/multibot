import './bots/bot1/dist/index.js';
import './bots/bot2/dist/index.js';
import './bots/bot3/dist/index.js';

console.log("✅ All bots started from combined.js");

// Create a simple web server for deployment
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bots are running successfully!');
});

const port = process.env.PORT || 8081;
server.listen(port, '0.0.0.0', () => {
  console.log(`Web server running on port ${port}`);
});
