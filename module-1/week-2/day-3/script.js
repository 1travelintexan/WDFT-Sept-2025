//grab an h1 element
const h1Element = document.querySelector("h1");
const samElement = document.getElementById("sam");
const bounceBtnElement = document.querySelector("#bounce-btn");
const body = document.querySelector("body");
const changeColorButton = document.querySelector("#change-background-btn");
const addPetButton = document.getElementById("add-pet-btn");
const petContainerElement = document.getElementById("pet-container");
const likeButton = document.getElementById("like-btn");
const petCard = document.querySelector(".pet-card");
const deleteBtnElement = document.getElementById("delete-btn");
//our pet array
const petsArray = [
  {
    name: "Sam",
    image: "./images/sam.png",
  },
  {
    name: "Reaper",
    image: "./images/reaper.png",
  },
  {
    name: "Kuku",
    image: "./images/kuku.png",
  },
];

// the .style property brings you to 'CSS' land
//in the .style everything for CSS is now 'camelCase'
h1Element.style.color = "red";
h1Element.style.backgroundColor = "blue";
h1Element.style.textAlign = "center";
//you can also change the text of p tags, h tags and all others
h1Element.innerText = "This is a fun day!";
//this is how to add and remove a class to an element
// h1Element.classList.add("bounce");
// h1Element.classList.remove("bounce");
// samElement.style.backgroundColor = "purple";
// samElement.style.display = "none";

//***************evenet listeners **********/
bounceBtnElement.addEventListener("click", () => {
  console.log("bounce clicked");
  h1Element.classList.toggle("bounce");
});

changeColorButton.addEventListener("click", () => {
  console.log("change background button clicked", changeColorButton);
  //this changes the color of the background
  body.classList.toggle("change-background-color");
  //this changes the text in the button
  if (changeColorButton.innerText === "Background Green") {
    changeColorButton.innerText = "Background Red";
  } else {
    changeColorButton.innerText = "Background Green";
  }
});
addPetButton.addEventListener("click", () => {
  //grab a random pet from the array
  const randomIndex = Math.floor(Math.random() * petsArray.length);
  const randomPet = petsArray[randomIndex];
  //remove the random pet from the original array
  petsArray.splice(randomIndex, 1);

  //first create the element
  const newArticleElement = document.createElement("article");
  newArticleElement.classList.add("pet-card");
  //add the html as innerHTML to the new article
  newArticleElement.innerHTML = `
    <img src=${randomPet.image} alt=${randomPet.name} class="pet-image" />
    <h3>${randomPet.name}</h3>
    <button  id="like-btn">Like</button>
     <button  id="delete-btn">Delete</button>
    `;
  //add the correct class to the article for styling
  //make sure to remember to add the new element to the page with the appendChild method
  petContainerElement.appendChild(newArticleElement);

  //*************the like buttton for the new pet********* */
  //target the like button in the new article
  const newLikedButton = newArticleElement.querySelector("#like-btn");

  //add an event listener after you add it to the page
  newLikedButton.addEventListener("click", () => {
    newArticleElement.classList.toggle("liked");
    if (newLikedButton.innerText === "Like") {
      newLikedButton.innerText = "Un-Like";
    } else {
      newLikedButton.innerText = "Like";
    }
  });

  //**************the delete button for the new pet ************ */
  const newDeleteButton = newArticleElement.querySelector("#delete-btn");
  newDeleteButton.addEventListener("click", () => {
    newArticleElement.style.display = "none";
  });
});

//Pau adding the event listener
likeButton.addEventListener("click", () => {
  petCard.classList.toggle("liked");
  if (likeButton.innerText === "Like") {
    likeButton.innerText = "Un-Like";
  } else {
    likeButton.innerText = "Like";
  }
});
deleteBtnElement.addEventListener("click", () => {
  petCard.style.display = "none";
});
