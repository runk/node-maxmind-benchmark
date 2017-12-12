const path = require('path');

const randip = () =>
  Math.ceil(Math.random() * 254) + '.' +
    Math.ceil(Math.random() * 254) + '.' +
    Math.ceil(Math.random() * 254) + '.' +
    Math.ceil(Math.random() * 254);



const DB_FILE = path.join(__dirname, '/GeoLite2-City.mmdb');


const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();
suite.on('cycle', (event) => {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
});

const experiment = (name, fn) => {
  suite.add(name, { minSamples: 100, fn });
};


/******************* maxmind ***********************/
const maxmind = require('maxmind').openSync(DB_FILE);
experiment('maxmind', () => { maxmind.get(randip()); });


/***************** mmdb-reader *********************/
const mmdbReader = require('mmdb-reader')(DB_FILE);
experiment('mmdb-reader', () => { mmdbReader.lookup(randip()); });


/************* maxmind-db-reader *******************/
const maxmindDbReader = require('maxmind-db-reader').openSync(DB_FILE);
experiment('maxmind-db-reader', () => { maxmindDbReader.getGeoDataSync(randip()); });


/******************* geoip2  ***********************/
const geoip2 = require('geoip2').init(DB_FILE);
experiment('geoip2', () => { geoip2.lookupSync(randip()); });


/******************* jgeoip  ***********************/
const jgeoip = new (require('jgeoip'))(DB_FILE);
experiment('jgeoip', () => { jgeoip.getRecord(randip()); });


console.log('Benchmarking...');
suite.run();
