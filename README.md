# pong_Game_JsFunctions:

keyDownHandler(e) and keyUpHandler(e):

These functions handle key presses and releases.
reset():

This function resets the ball's position and velocity.
checkCollision(paddle):

This function checks if the ball collides with a paddle.
gameLoop():

This is the main game loop that updates the ball's position, checks for collisions, and handles paddle movements.
Formulas:

Ball velocity calculation:

Formula: v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2))
Description: Calculates the ball's velocity (v) using the Pythagorean theorem.
Paddle collision angle calculation:

Formula: Angle calculation depends on the position of the ball and the paddle it collides with.
When the ball collides with the user's paddle:
If the ball is above the paddle's center, the angle is set to -Math.PI / 4.
If the ball is below the paddle's center, the angle is set to Math.PI / 4.
If the ball is at the same height as the paddle's center, the angle is set to 0.
When the ball collides with the AI's paddle:
If the ball is above the paddle's center, the angle is set to -3 * Math.PI / 4.
If the ball is below the paddle's center, the angle is set to 3 * Math.PI / 4.
If the ball is at the same height as the paddle's center, the angle is set to 0.
Ball movement:

Formulas:
Update horizontal position: ball.style.left = ball.offsetLeft + vX + "px";
Update vertical position: ball.style.top = ball.offsetTop + vY + "px";
Paddle movement:

Formulas:
User paddle up movement: userPaddle.style.top = userPaddle.offsetTop - 7 + "px";
User paddle down movement: userPaddle.style.top = userPaddle.offsetTop + 7 + "px";
AI paddle movement: AI paddle movement is not directly controlled by formulas in this code.
Scoring:

The user and AI scores are incremented when the ball crosses the left or right boundaries of the game box.# Breadcrumbspong_Game_Js

This repository contains the code for a simple Pong game implemented in JavaScript.

## Functions

1. `keyDownHandler(e)` and `keyUpHandler(e)`: These functions handle key presses and releases.

2. `reset()`: This function resets the ball's position and velocity.

3. `checkCollision(paddle)`: This function checks if the ball collides with a paddle.

4. `gameLoop()`: This is the main game loop that updates the ball's position, checks for collisions, and handles paddle movements.

## Formulas

1. Ball velocity calculation:
   - Formula: `v = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2))`
   - Description: Calculates the ball's velocity (`v`) using the Pythagorean theorem.

2. Paddle collision angle calculation:
   - Formula: Angle calculation depends on the position of the ball and the paddle it collides with.
     - When the ball collides with the user's paddle:
       - If the ball is above the paddle's center, the angle is set to `-Math.PI / 4`.
       - If the ball is below the paddle's center, the angle is set to `Math.PI / 4`.
       - If the ball is at the same height as the paddle's center, the angle is set to `0`.
     - When the ball collides with the AI's paddle:
       - If the ball is above the paddle's center, the angle is set to `-3 * Math.PI / 4`.
       - If the ball is below the paddle's center, the angle is set to `3 * Math.PI / 4`.
       - If the ball is at the same height as the paddle's center, the angle is set to `0`.

3. Ball movement:
   - Formulas:
     - Update horizontal position: `ball.style.left = ball.offsetLeft + vX + "px";`
     - Update vertical position: `ball.style.top = ball.offsetTop + vY + "px";`

4. Paddle movement:
   - Formulas:
     - User paddle up movement: `userPaddle.style.top = userPaddle.offsetTop - 7 + "px";`
     - User paddle down movement: `userPaddle.style.top = userPaddle.offsetTop + 7 + "px";`
     - AI paddle movement: AI paddle movement is not directly controlled by formulas in this code.

5. Scoring:
   - The user and AI scores are incremented when the ball crosses the left or right boundaries of the game box.
