import server from "./src/app.js";

import { PORT } from "./config.js";

server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`);
});
