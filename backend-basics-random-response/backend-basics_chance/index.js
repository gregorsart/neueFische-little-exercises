import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(
    `This server gives you random msgs and is running at http://localhost:${port}`
  );
});
