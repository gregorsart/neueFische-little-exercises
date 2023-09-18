import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(`This awesome server is running at http://localhost:${port}`);
});
