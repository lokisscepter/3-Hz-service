const server = require('./server.js');
const PORT = process.env.PORT || 1337;

server.listen(PORT, () => console.log(`express is listening on port ${PORT}`));