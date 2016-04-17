/**
 * Created by akshata on 4/15/16.
 * Time spent on exercise 10 mins
 */

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *  The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * @param: input numbers (x, y) and limit (n)
 * @return: {number: sum of all the multiples of 3 or 5 below 1000
 */

// note: Needs Node Js to be installed to run this script for execution time calculation.


var sumOfMultiples = function(x,y,n) {
    // variables to store sum of multiples of 3, 5, and 3 * 5
    var sumx = 0, sumy = 0, sumxy = 0;
    var i, j, k;

    for(i = 0; i <= Math.floor(n-1/x); i++) {
        if(i % x == 0) {
            sumx += i;
        }
    }

    for(j = 0; j <= Math.floor(n-1/y); j++) {
        if(j % y == 0) {
            sumy += j;
        }
    }


    for(k = 0; k <= Math.floor(n-1/(x*y)); k++) {
        if(k % (x*y) == 0) {
            sumxy += k;
        }
    }

    // Since there will be intersections between multiples of 3 and 5, they will be added twice,
    // we need to subtract the multiples of (3*5) to remove the duplicate additions.
    // for eg: multiples of 3: 3,6,9,12,15,...30 multiples of 5: 5,10,15,...30 so the intersection is 15,30,etc 
    // which are multiples of 15 that need to be subtracted to they are not added twice.
    return sumx + sumy - sumxy;

}

// start process timer to calculate execution time
var hrstart = process.hrtime();
console.log("Sum of all mutliples of 3 and 5 below 1000:", sumOfMultiples(3,5,1000));
var hrend = process.hrtime(hrstart);
console.log("Execution time: %dms", hrend[1]/1000000);