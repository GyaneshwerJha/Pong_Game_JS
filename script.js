let userPaddle = document.getElementById("user-paddle");
let aiPaddle = document.getElementById("ai-paddle");
let ball = document.getElementById("ball");
let gamebox = document.getElementById("gamebox-container");

let zPressed = false;
let xPressed = false;
let nPressed = false;
let mPressed = false;

let userScore = document.getElementById("user-score");
let aiScore = document.getElementById("ai-score");

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'z') {
        zPressed = true;
        // console.log("z pressed");
    }
    else if (e.key == 'x') {
        xPressed = true;
        // console.log("x pressed");
    }
    else if (e.key == 'n') {
        nPressed = true;
    }
    else if (e.key == 'm') {
        mPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'z') {
        zPressed = false;
        // console.log("z released");
    }
    else if (e.key == 'x') {
        xPressed = false;
        // console.log("x released")
    }
    else if (e.key == 'n') {
        nPressed = false;
    }
    else if (e.key == "m") {
        mPressed = false;
    }
}

/* ball movement in 2d, it will have some velocity in x and y direction, 
    and we will update the position of the ball by adding the velocity to the position of the ball
    and we will also check if the ball is hitting the wall or the paddle, if it is hitting the wall, we will change the direction of the ball
    and if it is hitting the paddle, we will change the direction of the ball and increase the speed of the ball

    the velocity of the ball can be represented by a vector, it can be decomposed into Vx and Vy ( x and y components of the velocity vector)

    the formula is -> v = sqrt ( Vx^2 + Vy^2 )  (pythagoras theorem)

 */

let vX = -5;
let vY = -7;
let v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));



function reset() {
    ball.style.left = "50%";
    ball.style.top = "50%";
    vX = -5;
    vY = -7;
    v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
}

function checkCollision(paddle) {
    let ballTop = ball.offsetTop;
    let ballBottom = ball.offsetTop + ball.offsetHeight;
    let ballLeft = ball.offsetLeft;
    let ballRight = ball.offsetLeft + ball.offsetWidth;

    let paddleTop = paddle.offsetTop;
    let paddleBottom = paddle.offsetTop + paddle.offsetHeight;
    let paddleLeft = paddle.offsetLeft;
    let paddleRight = paddle.offsetLeft + paddle.offsetWidth;

    if (ballBottom > paddleTop && ballTop < paddleBottom && ballRight > paddleLeft && ballLeft < paddleRight) {
        return true;
    }
    else {
        return false;
    }

}

function gameLoop() {
    if (ball.offsetLeft < 0) {
        aiScore.innerHTML = parseInt(aiScore.innerHTML) + 1;
        reset();
    }
    if (ball.offsetLeft > gamebox.offsetWidth - ball.offsetWidth) {
        reset();
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;


    }
    if (ball.offsetTop < 0) {
        vY = -vY;
    }
    if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight) {
        vY = -vY;
    }

    //  *************************
    let paddle = ball.offsetLeft < gamebox.offsetWidth / 2 ? userPaddle : aiPaddle;
    let ballCenterY = ball.offsetTop + ball.offsetHeight / 2;
    let paddleCentreY = paddle.offsetTop + paddle.offsetHeight / 2;

    let angle = 0;
    if (checkCollision(paddle)) {
        if (paddle == userPaddle) {
            if (ballCenterY < paddleCentreY) {
                angle = -Math.PI / 4;
            }
            else if (ballCenterY > paddleCentreY) {
                angle = Math.PI / 4;
            }
            else {
                angle = 0;
            }
        }
        else if (paddle == aiPaddle) {
            if (ballCenterY < paddleCentreY) {
                angle = -3 * Math.PI / 4;
            }
            else if (ballCenterY > paddleCentreY) {
                angle = 3 * Math.PI / 4;
            }
            else {
                angle = 0;
            }
        }

        v = v + 0.2;
        vX = v * Math.cos(angle);
        vY = v * Math.sin(angle);

    }

    // let aiDelay = 0.09;
    // aiPaddle.style.top = aiPaddle.offsetTop + (ball.offsetTop - aiPaddle.offsetTop - aiPaddle.offsetHeight / 2) * aiDelay + "px";


    // **************************
    ball.style.left = ball.offsetLeft + vX + "px";
    ball.style.top = ball.offsetTop + vY + "px";

    if (zPressed && userPaddle.offsetTop > 2) {
        userPaddle.style.top = userPaddle.offsetTop - 7 + "px";
    }
    if (xPressed && userPaddle.offsetTop < gamebox.offsetHeight - aiPaddle.offsetHeight - 2) {
        userPaddle.style.top = userPaddle.offsetTop + 7 + "px";
    }

    if (nPressed && aiPaddle.offsetTop > 2) {
        aiPaddle.style.top = aiPaddle.offsetTop - 7 + "px";
    }
    if (mPressed && aiPaddle.offsetTop < gamebox.offsetHeight - aiPaddle.offsetHeight - 2) {
        aiPaddle.style.top = aiPaddle.offsetTop + 7 + "px";
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();


