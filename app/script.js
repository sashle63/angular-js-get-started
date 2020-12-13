'use strict';

// Declare app level module which depends on views, and core components
// var work = function() {
//
//   console.log("working harder!");
//
// };
//
// var doWork = function (f) {
//   console.log ( "inside doWork" );
//   f();
// };
//
// doWork(work);

var program = function () {

    var createWorker = function () {

        var workCount = 0;
        var task1 = function () {
            workCount++;
            console.log("in task1 " + workCount);
        };

        var task2 = function () {
            workCount++;
            console.log("in task2 " + workCount);
        };

        return {
            job1: task1,
            job2: task2
        };
    };
    var worker = createWorker();

    worker.job1();
    worker.job2();
    worker.job1();
    worker.job1();
};


program();
