(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var namesArray = ['Steven', 'Katelin', 'Theresa', 'Randy'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(namesArray.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(namesArray[0]);
    console.log(namesArray[1]);
    console.log(namesArray[2]);
    console.log(namesArray[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < namesArray.length; i++) {
        console.log(namesArray[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    namesArray.forEach(function(name) {
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first() {
        console.log(namesArray[0]);
        return namesArray[0];
    }
    function second() {
        console.log(namesArray[1]);
        return namesArray[1];
    }
    function last() {
        console.log(namesArray[3]);
        return namesArray[3];
    }
    first();
    second();
    last();
})();
