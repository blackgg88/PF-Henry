import server from "./src/app";

import { PORT } from "./config";

server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`);
});
