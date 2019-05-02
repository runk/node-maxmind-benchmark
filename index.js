const path = require("path");
const random = require("random-seed").create("maxmind");

random.initState();
const randip = () =>
  random(254) + "." + random(254) + "." + random(254) + "." + random(254);

const DB_FILE = path.join(__dirname, "/GeoLite2-City.mmdb");

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

suite
  .on("cycle", event => {
    random.initState();
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  });

const experiment = (name, fn) => {
  suite.add(name, { minSamples: 100, fn });
};

(async () => {
  /******************* maxmind ***********************/
  const maxmind = await require("../node-maxmind").default.open(DB_FILE);
  experiment("maxmind", () => {
    maxmind.get(randip());
  });

  /***************** mmdb-reader *********************/
  const mmdbReader = require("mmdb-reader")(DB_FILE);
  experiment("mmdb-reader", () => {
    mmdbReader.lookup(randip());
  });

  /************* maxmind-db-reader *******************/
  const maxmindDbReader = require("maxmind-db-reader").openSync(DB_FILE);
  experiment("maxmind-db-reader", () => {
    maxmindDbReader.getGeoDataSync(randip());
  });

  /******************* jgeoip  ***********************/
  const jgeoip = new (require("jgeoip"))(DB_FILE);
  experiment("jgeoip", () => {
    jgeoip.getRecord(randip());
  });

  console.log("Benchmarking...");
  suite.run();
})();
