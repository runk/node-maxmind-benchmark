const random = require("random-seed").create("maxmind");
random.initState();

const randip = () =>
  random(254) + "." + random(254) + "." + random(254) + "." + random(254);

/* eslint-disable no-console */
var path = require("path");

var DB_FILE = path.join(__dirname, "/GeoLite2-City.mmdb");

var n = 5000000;

console.log("> Open Chrome and go to chrome://inspect");
console.log(
  "> There should be an inspector connection. Unpause debugger, go to Profiles."
);

console.profile("build");

(async () => {
  var my = await require("../node-maxmind").open(DB_FILE);
  var s = Date.now();
  console.log("> Running...");
  for (var i = 0; i < n; i++) {
    my.findAddressInTree(randip());
    // 203169 ops/s
    // 313087 ops/s
    // 502k ops/s
    // 507k

    // my.get(randip())
    // 120k ops/s

    // my.resolveDataPointer(2875603);
    //36000 ops/s

    // reader.readData(20772773)
    // 10000 ops/s
    // reader.lookup(randip())
    // 142k ops/s
    // reader.lookup(randip())
    // 473k ops/s
  }
  var f = Date.now();

  console.log(n, "iterations");
  console.log(f - s, "ms");
  console.log(~~(n / ((f - s) / 1000)), "op/sec");
  console.log(process.memoryUsage());

  console.profileEnd("build");
})();
