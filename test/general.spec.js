var njsTrace = require('../njsTrace.js');
njsTrace.inject({logger: false, enabled: true, wrapFunctions:false, prof:false, trace:true});

//var file1 = require('./mocks/file1.js');
var file2 = require('./mocks/file2.js');
//file1.foo();
file2.foo();
