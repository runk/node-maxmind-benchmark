# node-maxmind-benchmark


Performance benchmark for Node.js maxmind geo lookup libraries.

# Performance

![performance](https://docs.google.com/spreadsheets/d/1ZQvX2nV4NxF3rsnYC06JCbDOhEx33jy3avBnDEcQS3E/pubchart?oid=2131177765&format=image)


|Library|Relative speed|Operations per second|
|-------|:------------:|:-------------------:|
|[`maxmind`](https://github.com/runk/node-maxmind)|100%|290,921 (±5.37%)|
|[`mmdb-reader`](https://github.com/gosquared/mmdb-reader)|36.30%|105,602 (±47.62%)|
|[`jgeoip`](https://github.com/jclo/jgeoip)|18.16%|52,842 (±3.51%)|
|[`geoip2`](https://github.com/davidtsai/node-geoip2)|9.31%|27,071 (±1.78%)|
|[`maxmind-db-reader`](https://github.com/PaddeK/node-maxmind-db)|1.13%|3,288 (±0.86%)|


# License
MIT
