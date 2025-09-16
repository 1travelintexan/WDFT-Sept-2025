class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    //this element is the order list from the html
    this.topScoreListElement = document.getElementById("top-scores");
    this.player = new Player(this.gameScreen, 450, 200);
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.projectiles = [];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
    this.frame = 0;

    //add some sound
    this.boom = new Audio("../assets/boom.wav");
    //lower the volume
    this.boom.volume = 0.1;
  }
  start() {
    //sets the height and width of the game screen
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";
    //hides the start screen
    this.startScreen.style.display = "none";
    //shows the game screen
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    this.frame++;
    // console.log("inside the game loop");
    this.update();
    //check if the game is over
    if (this.gameIsOver) {
      //this stops the loop from running
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    //always call the move method of your player in the update
    this.player.move();
    //this moves all the obstacles

    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      //this is a second for loop inside the obstacle for loop to check for collisions
      //this controld the movement of all of the projectiles
      for (let j = 0; j < this.projectiles.length; j++) {
        const currentProjectile = this.projectiles[j];
        currentProjectile.move();
        //check if the projectile ever collides with an obstacle
        if (currentProjectile.didCollide(currentObstacle)) {
          //remove the obstacle from the array and the DOM
          this.obstacles.splice(i, 1);
          i--;
          //dont forget to remove the element from the DOM
          currentObstacle.element.remove();
          this.projectiles.splice(j, 1);
          currentProjectile.element.remove();
          j--;

          //add one point to this.score and then update the DOM
          this.score++;
          this.scoreElement.innerText = this.score;
        }
      }

      //if the obs goes off the screen on the bottom...
      //splice from array, and remove the element
      if (currentObstacle.top > 650) {
        this.obstacles.splice(i, 1);
        //dont forget to remove the element from the DOM
        currentObstacle.element.remove();

        //add one point to this.score and then update the DOM
        this.score++;
        this.scoreElement.innerText = this.score;
      }

      //check if obs hit our car
      if (this.player.didCollide(currentObstacle)) {
        //remove the obs from js array with .splice
        //remove the DOM img from the game screen
        // this.lives --
        this.obstacles.splice(i, 1);
        //dont forget to remove the element from the DOM
        currentObstacle.element.remove();
        i--;
        //this changes the js variable of this.lives
        this.lives--;
        //update the DOM to have the new lives
        this.livesElement.innerText = this.lives;

        //add the class of spin to the player car when hit
        this.player.element.classList.add("spin");
        //make a setTimeout to remove the class spin after one second
        setTimeout(() => {
          this.player.element.classList.remove("spin");
        }, 1000);
        //check if the this.lives === 0
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
    }

    //this will control how ofter an obstacle is added
    if (this.frame % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }
  gameOver() {
    console.log("game is over");
    //hide the game screen
    this.gameScreen.style.display = "none";
    //show the game over screen
    this.gameEndScreen.style.display = "block";
    //remove the player car from the game screen
    this.player.element.remove();
    this.highScore();
  }

  highScore() {
    // first grab the score (this.score)

    // then get the scores from the local storage
    const scoresInLS = localStorage.getItem("high-scores");
    console.log("this is in the high score", scoresInLS);

    // add the new score to the array from the local storage for the first time playing
    if (!scoresInLS) {
      localStorage.setItem("high-scores", JSON.stringify([this.score]));
    } else {
      console.log("this is in the else", scoresInLS);
      //convert string array into an actual array
      const parsedHighScores = JSON.parse(scoresInLS);
      //push your new score to that array
      parsedHighScores.push(this.score);
      //before reseting the local storage value, sort the array in desc order
      //sort the array desc and take the top 3
      parsedHighScores.sort((a, b) => b - a);
      const topThreeScores = parsedHighScores.slice(0, 3);
      //reset the local storage to have the old array and the new score
      localStorage.setItem("high-scores", JSON.stringify(topThreeScores));

      //after adding to local storage, update the DOM to show visually
      topThreeScores.forEach((oneScore) => {
        //create an li element
        const ourNewLi = document.createElement("li");
        //set the innerText of that element to be the score
        ourNewLi.innerText = oneScore;
        // append to the dom
        this.topScoreListElement.appendChild(ourNewLi);
      });
    }
  }
}
