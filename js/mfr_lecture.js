"use strict";

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/*
    MAP
    using .map, create an array that returns all author names.
 */

 const authors = books.map(book => book.author)




/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */

const threeGenres = books.filter(book => book.genres.length > 2)

/*
    REDUCE
    using .reduce, return the total years between all books.
 */

// const totalYears = books.yearsInPublication.reduce(function (currentSum, currentBook) {
//     return currentSum + currentBook
// },0);

const sumOfYears = books.reduce(function (accumulation, current) {
    const currentBook = current.yearsInPublication
    return accumulation + currentBook
},0)

console.log(sumOfYears)

const longestName = books.reduce(function (previous, current) {
    const  currentName = current.author;
    if (currentName.length > previous.length){
        return currentName
    } else {
        return previous
    }
},"");
console.log(longestName)





// function countWords(sentence) {
//     const words = sentence.split(" ");
//
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof word == 'undefined') {
//             return wordCounts + 1
//         } else {
//             return wordCounts += 1
//         }
//     },{})
//
