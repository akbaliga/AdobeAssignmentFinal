/**
 * Created by akshata on 4/15/16.
 * Time spent on exercise 20 mins
 */
/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

 3
 7 4
 2 4 6
 8 5 9 3

 That is, 3 + 7 + 4 + 9 = 23.

 Find the maximum total from top to bottom of the triangle below:

 75
 95 64
 17 47 82
 18 35 87 10
 20 04 82 47 65
 19 01 23 75 03 34
 88 02 77 73 07 63 67
 99 65 04 28 06 16 70 92
 41 41 26 56 83 40 80 70 33
 41 48 72 33 47 32 37 16 94 29
 53 71 44 65 25 43 91 52 97 51 14
 70 11 33 28 77 73 17 78 39 68 17 57
 91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67 30 73 16 69 87 40 31
 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 */

// note: Needs Node Js to be installed to run this script.
// Include node fs module.
var fs = require('fs');

var maxPathSum = function () {

    // Split the input data into multiple rows/levels of the tree
    var treeRows =  fs.readFileSync('maximumPathSumInput.txt', 'utf8').split('\n');

    for (var i = 0; i < treeRows.length; i++) {
        // split each row into an array of numbers representing each node in the tree at level i
        treeRows[i] = treeRows[i].split(' ');

        for (var j = 0; j < treeRows[i].length; j++) {
            treeRows[i][j] = parseInt(treeRows[i][j]);
        }

    };

    // starting from the child nodes in the last but one level of the tree, add each of the left and right leaf nodes with its parent node
    // and get the max value, then replace the parent node value with the max value, this goes on until we reach
    // the root node which has to be the max possible path sum value.

    for (var x = treeRows.length - 2; x >= 0; x--) {
        for (var y = 0; y < treeRows[x].length; y++) {
            // Check if sum of (node.left + node.value) > (node.right + node.value)
            if (treeRows[x + 1][y] + treeRows[x][y] > treeRows[x + 1][y + 1] + treeRows[x][y]) {
                treeRows[x][y] = treeRows[x + 1][y] + treeRows[x][y];
            } else {
                treeRows[x][y] = treeRows[x + 1][y + 1] + treeRows[x][y];
            }

        }
    }

    console.log("Max sum: ", treeRows[0]);

}

// start process timer to calculate execution time
var hrstart = process.hrtime();
maxPathSum();
var hrend   = process.hrtime(hrstart);
console.info("Execution time %dms:", hrend[1]/1000000);