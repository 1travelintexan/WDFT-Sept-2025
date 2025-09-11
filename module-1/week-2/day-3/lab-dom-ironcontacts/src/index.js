// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);
//delete button
const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {
  //with display = 'none' example
  // exampleRow.style.display = "none";
  //using the .remove() method
  exampleRow.remove();
});
//like button
const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("selected");
});
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((oneContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  //delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    //with display = 'none' example
    // exampleRow.style.display = "none";
    //using the .remove() method
    exampleRow.remove();
  });
  //like button
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  //get a random index from the array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  //grab a random PERSON with the random index
  const randomPerson = contacts[randomIndex];
  console.log("random clicked", randomIndex, randomPerson);

  //this removes the randomPerson from the array so we dont get duplicates in the future
  contacts.splice(randomIndex, 1);
  //this creates a new row and adds the randomPerson data to the rom
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${randomPerson.pictureUrl}" />
  </td>
  <td> ${randomPerson.name} </td>
  <td> ${randomPerson.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  //this appends or injects the row into the DOM which shows visually
  tableBody.appendChild(exampleRow);

  //delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    //with display = 'none' example
    // exampleRow.style.display = "none";
    //using the .remove() method
    exampleRow.remove();
  });
  //like button
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});
