# node-maxmind-benchmark


Performance benchmark for Node.js maxmind geo lookup libraries.

# Performance

![performance](https://docs.google.com/spreadsheets/d/1ZQvX2nV4NxF3rsnYC06JCbDOhEx33jy3avBnDEcQS3E/pubchart?oid=2131177765&format=image)


|Library|Relative speed|Operations per second|
|-------|:------------:|:-------------------:|
|[`maxmind`](https://github.com/runk/node-maxmind)|100%|215,238 (±5.85%)|
|[`mmdb-reader`](https://github.com/gosquared/mmdb-reader)|60.58%|130,389 (±3.40%)|
|[`geoip2`](https://github.com/davidtsai/node-geoip2)|10.71%|23,059 (±0.64%)|
|[`maxmind-db-reader`](https://github.com/PaddeK/node-maxmind-db)|1.13%|2,422 (±1.87%)|

# License
MIT

			
