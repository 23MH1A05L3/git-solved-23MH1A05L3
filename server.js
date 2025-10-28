const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server is running successfully!');
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
