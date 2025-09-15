class Projectile {
  constructor(gameScreen, top, left) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left;
    this.width = 20;
    this.height = 40;
    //this creates the <img> tag
    //the element is the img tag that is our car
    this.element = document.createElement("img");
    //set the src of the img tag to be the car
    this.element.src = "../images/bullet.png";
    //never forget... set the position to absolute
    this.element.style.position = "absolute";
    //set the height and width of that img
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    //set the position of your car to the middle and bottom
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
    //add the element to the DOM
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top += -6;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const projectileRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      projectileRect.left < obstacleRect.right &&
      projectileRect.right > obstacleRect.left &&
      projectileRect.top < obstacleRect.bottom &&
      projectileRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
