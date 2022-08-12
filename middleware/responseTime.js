const express = require('express');
const router = express(); //ask for router to express
//trying to add middleware for getting response time
// router.use(function(req, res, next) { req.start = Date.now(); next(); });
console.log(`inside responseTime()`)
const responseTime = (req, res, next) => {
    var start = Date.now();
    res.on('header', function() {
        var duration = Date.now() - start;
        // log duration
        console.log('%s %s %s %s', req.method, req.url, start, duration);  
    });
    next();
} 

// module.exports.responseTime = responseTime;

// module.exports = function responseTime(){
//     return function(req, res, next){
//       var start = new Date;
  
//       if (res._responseTime) return next();
//       res._responseTime = true;
  
//       res.on('header', function(){
//         var duration = new Date - start;
//         res.setHeader('X-Response-Time', duration + 'ms');
//       });
  
//       next();
//     };
//   };
module.exports = responseTime;

