import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./input";
import Brick from "./brick";


export default class Game{

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = [];
        for (let i=0; i<10; i++) {
            brick.push(new Brick(this, {x: i * 52, y: 30} ))

        }

        this.gameObjects = [this.ball, this.paddle, ...bricks];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));
    }

}