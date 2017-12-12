# node-maxmind-benchmark


Performance benchmark for Node.js Maxmind geo lookup libraries.

*Supports current GeoIP2 aka MMDB database format only, legacy GeoIP format is not supported*

# Performance

![performance](https://docs.google.com/spreadsheets/d/1ZQvX2nV4NxF3rsnYC06JCbDOhEx33jy3avBnDEcQS3E/pubchart?oid=2131177765&format=image)


|Library|Relative speed|Operations per second|Slower by|
|-------|:------------:|:-------------------:|---------|
|[`maxmind`](https://github.com/runk/node-maxmind)|100%|592,279 (±2.22%)|0|
|[`mmdb-reader`](https://github.com/gosquared/mmdb-reader)|61.53%|364,415 (±2.16%)|63%|
|[`jgeoip`](https://github.com/jclo/jgeoip)|9.62%|56,951 (±3.66%)|490%|
|[`geoip2`](https://github.com/davidtsai/node-geoip2)|4.33%|25,635 (±2.08%)|2210%|
|[`maxmind-db-reader`](https://github.com/PaddeK/node-maxmind-db)|0.58%|3,437 (±2.39%)|17132%|

*Note: benchmark was run under node v8.4.0*

# License
MIT
