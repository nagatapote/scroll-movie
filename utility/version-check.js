const pkg = require("../package.json");

const branch = process.env.BRANCH_NAME;
const [type, version] = branch.split("/");

console.log(pkg.version, version);

if (pkg.version !== version) {
  throw new Error("version not matched");
}
