const app = require("./app");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 9003;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
