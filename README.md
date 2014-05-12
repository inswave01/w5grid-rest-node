w5grid-rest-node
================


This is a Restful Service sample, combination of [express](http://expressjs.com) and [mongoDB](http://www.mongodb.org/)

You can test W5Grid through Restful CRUD.

The installation is very easy, please follow the instruction.

## Installation
Before any installation begun, you must have [node.js](http://nodejs.org/) installed on your computer.


Clone [W5Grid](https://github.com/inswave/w5grid-rest-node.git) from GitHub or install it through npm registry

```
npm install w5grid-rest-node
```

Install express and MongoClient to run w5grid-rest-node sample.
```
npm install
```

Install w5 through bower installation.
```
bower install w5
```

## Execute
Befor running express, MongoDB must be installed and executed. 
```
....
[initandlisten] MongoDB starting : pid=16075 port=27017 dbpath=/data/db/ ....
[initandlisten] db version v2.4.9
....
[websvr] admin web console waiting for connections on port 28017
[initandlisten] waiting for connections on port 27017
....
```

Run `server.js`. If the prameter is 'true', the initial data will be re populate.
```
node server.js (true)
```

## Test
You can test the sameple program. The sample is located under the /test directory.

The test program has been written with [QUnit](https://qunitjs.com/) 

On the browser, type the following URL to see the test result.
```
http://localhost:3000/test/fetch.html
http://localhost:3000/test/sync.html
```
