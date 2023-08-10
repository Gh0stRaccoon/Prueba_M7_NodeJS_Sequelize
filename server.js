const { sync } = require("./app/models");
const { challengeQueries } = require("./app/utils/challengeQueries");

(async () => {
  await sync();
  await challengeQueries();
})();
