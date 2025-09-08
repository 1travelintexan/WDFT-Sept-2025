// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// ************Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [
  {
    book: 1,
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },

  {
    book: 2,
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// for (let i = 0; i < booksArray.length; i++) {
//   const currentBook = booksArray[i];
//   delete currentBook.details.language;
// }
booksArray.forEach((aBook) => {
  delete aBook.details.language;
});
console.log(booksArray);

// Iteration 4 | Estimated Reading Time
for (let i = 0; i < booksArray.length; i++) {
  const currentBook = booksArray[i];
  currentBook.readingTime = Math.ceil((currentBook.pages * 500) / 90);
}

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(dict) {
  const array = [];

  //loop over the object
  for (author in dict) {
    const theBooks = dict[author];
    // console.log(dict, author, theBooks);
    //now we loop over the array of books
    for (let i = 0; i < theBooks.length; i++) {
      const currentBook = theBooks[i];
      console.log(currentBook);
      const correctBookFormatted = {
        title: currentBook[0],
        pages: currentBook[1],
        author: author,
      };
      array.push(correctBookFormatted);
    }
  }
  console.log(array);
  return array;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(arrayOfBooks) {
  let totalPages = 0;
  // for (let i = 0; i < arrayOfBooks.length; i++) {
  //   const currentBook = arrayOfBooks[i];
  //   totalPages += currentBook.pages;
  // }
  arrayOfBooks.forEach((oneBook) => {
    totalPages += oneBook.pages;
  });

  return totalPages / arrayOfBooks.length;
}
