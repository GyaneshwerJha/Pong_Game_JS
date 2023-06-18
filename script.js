let userPaddle = document.getElementById("user-paddle");
let aiPaddle = document.getElementById("ai-paddle");
let ball = document.getElementById("ball");
let gamebox = document.getElementById("gamebox-container");

let zPressed = false;
let xPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'z') {
        zPressed = true;
        console.log("z pressed");
    }
    else if (e.key == 'x') {
        xPressed = true;
        console.log("x pressed");
    }
}

function keyUpHandler(e) {
    if (e.key == 'z') {
        zPressed = false;
        console.log("z released");
    }
    else if (e.key == 'x') {
        xPressed = false;
        console.log("x released")
    }
}

/* ball movement in 2d, it will have some velocity in x and y direction, 
    and we will update the position of the ball by adding the velocity to the position of the ball
    and we will also check if the ball is hitting the wall or the paddle, if it is hitting the wall, we will change the direction of the ball
    and if it is hitting the paddle, we will change the direction of the ball and increase the speed of the ball

    the velocity of the ball can be represented by a vector, it can be decomposed into Vx and Vy ( x and y components of the velocity vector)

    the formula is -> v = sqrt ( Vx^2 + Vy^2 )  (pythagoras theorem)

 */

let vX = -2;
let vY = -3;
let v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));



function reset() {
    ball.style.left = "50%";
    ball.style.top = "50%";
    vX = -2;
    vY = -3;
    v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
}


function gameLoop() {
    if (ball.offsetLeft < 0) {
        reset();
    }
    if (ball.offsetLeft > gamebox.offsetWidth - ball.offsetWidth) {
        reset();
    }
    if (ball.offsetTop < 0) {
        vY = -vY;
    }
    if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight) {
        vY = -vY;
    }

    ball.style.left = ball.offsetLeft + vX + "px";
    ball.style.top = ball.offsetTop + vY + "px";

    if (zPressed && userPaddle.offsetTop > 2) {
        userPaddle.style.top = userPaddle.offsetTop - 5 + "px";
    }
    if (xPressed && userPaddle.offsetTop < gamebox.offsetHeight - userPaddle.offsetHeight - 2) {
        userPaddle.style.top = userPaddle.offsetTop + 5 + "px";
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();


