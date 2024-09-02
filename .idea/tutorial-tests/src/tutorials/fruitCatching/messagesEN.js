export default {
    /**
     * Header
     */
    title: `Fruit Catching`,
    difficulty: 'hard',
    
    /**
     * Downloads
     */
    downloadMessage: 'In this tutorial, you will create your own computer game step by step.\nIn the game, you control a bowl using the arrow keys with the goal of collecting all the apples and as many bananas as possible within 30 seconds.\nEach of the following 5 steps will explain exactly what you need to do. Once you have followed all the instructions for a step, you can click on "Check" to verify your solution. You can only proceed to the next step if all the tests are correct.',

    // download of the apple
    download1: 'Apple',
    // download of the banana
    download2: 'Banana',
    // download of the bowl
    download3: 'Bowl',
    // download of the stage
    download4: 'Stage',

    /**
     * Step 1, former step 3
     */
    titleStep1: 'Control bowl',
    messageStep1: 'First of all, we want to be able to control the bowl with the arrow keys.\nYour bowl starts in the center at the bottom of the stage (x = 0 / y = -145) and can be moved to the right in steps of 10 with the right arrow key.\nWhen the left arrow key is pressed, the bowl should move 10 steps to the left.',
    message2Step1: 'Test your program by playing around with the bowl.',
    solutionStep1: 'One possible solution is shown here.',

    /**
     * Step 2
     */
    titleStep2: 'Time and points',
    messageStep2: 'Insert a variable for the \'time\'. This should be 30 after clicking the green flag and then count down to 0 every second. When the time reaches 0, the shell should say \'End\' and then everything should stop. Also add a variable \'Points\', which is set to 0 when the game starts.',
    message2Step2: 'Remember to use variables and assign a value to them at each start.',
    solutionStep2: 'Your solution should look something like this.',

    /**
     * Step 3
     */
    titleStep3: 'Apple',
    messageStep3: 'Now let\'s take care of the apple. The apple has a size of 50%.\nThe apple starts at a random position at the top of the stage (y = 170). As long as the countdown has not expired, the apple falls straight down at a falling speed of y=-5.\nIf the apple is collected with the bowl, the apple reappears at a random position at the top of the stage (y=170) and the points are increased by 5.\nIf the apple falls to the ground (red line), the game is over and the apple says \'Game Over!\'',
    message2Step3: '(Hint: Use the color of the red line to check whether the apple is touching the ground. You can use the pipette to select the correct color on the stage).',
    solutionStep3: 'Your solution should look something like this. In the second picture, you can see where you can find the pipette with which you can select a specific color on the stage.',

    /**
     * Step 4
     */
    titleStep4: 'Banana',
    messageStep4: 'Finally, the banana. The banana, like the apple, has a size of 50% and a random starting position at the top of the stage (y=170).\nAs long as the countdown has not expired, it falls straight down at a falling speed of y=-7.\nIf the banana touches the red line, it says \'-8\' for one second and 8 points are deducted. \nIf the banana is collected with the peel, the score is increased by 8 and it returns to a random position with y = 170.\nThe banana should wait invisibly for one second after the program starts and also after the \'-8\' message before it falls from the sky.',
    message2Step4: 'If you have realized the banana in a similar way to the picture above, the game is finished. Play the game to check whether everything works.',
    solutionStep4: 'Your solution should look something like this.',

    /**
     * test specific messages
     */
    stepBefore1: 'Oh no! Something in step ',
    stepBefore2: ' is no longer working. Please check your project again. ',
    hintMessage: 'Hint: ',

    /* hints for step 1, former step 3:*/
    step1_2: {
        name: 'Bowl Initialization',
        failureMessage: 'The bowl should initially be at position x=0 and y=-145.',
        description: 'Checks the initialization of the bowl position. The bowl must start at (0, -145).'
    },
    step1_4: {
        name: 'Bowl Movement',
        failureMessage: 'The bowl should move in the corresponding direction when the left or right arrow key is pressed and must not move if no arrow key is pressed.',
        description: 'Tests the movement of the bowl sprite. The bowl must move in the corresponding direction when the left or right arrow key is pressed and must not move if no arrow key is pressed.'
    },
    step1_5: {
        name: 'Bowl Movement Details',
        failureMessage: 'The bowl should move in steps of 10 and must never move up or down.',
        description: 'Tests the movement details of the bowl sprite. The bowl must move in steps of 10 and must never move vertically.'
    },

    /* hints for step 2:*/
    step2_1: {
        name: 'Variable Initialization',
        failureMessage: 'Check whether you have initialized your time and points variables correctly. The start value of time should be 30 and that of points 0.',
        description: 'Tests the initialization of the variable values for time and score. The time must start at 30, the score must start at 0.'
    },
    step2_26: {
        name: 'Timer Tick',
        failureMessage: 'The value of the variable time should be reduced by 1 every second.',
        description: 'Checks whether the time is ticking down as expected. The time must tick down by one every second.'
    },
    step2_27: {
        name: 'Game Over message after time limit',
        failureMessage: 'At the beginning, the time should be 30 and the game should end when the time has reached 0.',
        description: 'Checks whether the game ends when the time limit is reached. The time must start at 30 and end the game when it reaches 0.'
    },
    step2_28: {
        name: 'Game Over message after time limit',
        failureMessage: 'When the variable time has reached the value 0, the bowl should say \'End!\'.',
        description: 'Tests whether the game displays a Game Over message after reaching the time limit.'
    },

    /* hints for step 4:*/
    step3_3: {
        name: 'Apple initialization',
        failureMessage: 'The apple should have a size of 50% when initialized.',
        description: 'Tests the initialization of the apple size. The apple should have a size of 50%.'
    },
    step3_6: {
        name: 'Apple falls down',
        failureMessage: 'The apple should fall down from the top.',
        description: 'Checks if the apple falls down from the top of the screen.'
    },
    step3_7: {
        name: 'Apple falls down details',
        failureMessage: 'The apple should fall down in steps of -5 and should not move up, left, or right.',
        description: 'Tests the details of the falling apple. The apple must fall down in steps of -5 and should not move up or horizontally.'
    },
    step3_10: {
        name: 'Apple appears',
        failureMessage: 'The apple should reappear after falling down.',
        description: 'Tests if the apple reappears after falling down.'
    },
    step3_11: {
        name: 'Apple appears at random x position',
        failureMessage: 'The apple should appear at a random x position.',
        description: 'Tests if apples appear at the correct x positions. The apple must appear at a random x position.'
    },
    step3_12: {
        name: 'Apple appears at specific y position',
        failureMessage: 'The apple should appear at y=170.',
        description: 'Checks if the apple appears at the correct y position. The apple must appear at y = 170.'
    },
    step3_16: {
        name: 'Only one apple appears',
        failureMessage: 'During the game, only one apple should be visible at a time.',
        description: 'Checks if only one apple is visible during the game. Two apples can be visible if they share the exact same position.'
    },
    step3_20: {
        name: 'Apple points',
        failureMessage: 'The points should increase by 5 when the apple is caught by the bowl.',
        description: 'Tests if apples give 5 points when they touch the bowl.'
    },
    step3_21: {
        name: 'Game over due to apple',
        failureMessage: 'The game should end when the apple touches the ground (red line).',
        description: 'Tests if a falling apple ends the game.'
    },
    step3_22: {
        name: 'Game over due to apple message',
        failureMessage: 'When the apple touches the ground, it should say \'Game over!\' for one second.',
        description: 'Checks if a falling apple displays a Game Over message.'
    },


    /* hints for step 5:*/
    step4_3: {
        name: 'Banana initialization',
        failureMessage: 'The banana should have a size of 50% when initialized.',
        description: 'Tests the initialization of the banana size. Bananas should have a size of 50%.'
    },
    step4_8: {
        name: 'Banana falls down',
        failureMessage: 'The banana should fall down from the top.',
        description: 'Checks if the banana falls down from the top of the screen.'
    },
    step4_9: {
        name: 'Banana falls down details',
        failureMessage: 'The banana should fall down in steps of -7 and should not move up, left, or right.',
        description: 'Tests the details of the falling banana. The banana must fall down in steps of -7 and should not move up or horizontally.'
    },
    step4_13: {
        name: 'Banana appears',
        failureMessage: 'The banana should respawn after falling down or being caught.',
        description: 'Tests if bananas respawn after falling down.'
    },
    step4_14: {
        name: 'Banana appears at random x position',
        failureMessage: 'The banana should appear at a random x position.',
        description: 'Tests if bananas appear at the correct x positions. Bananas must appear at random x positions.'
    },
    step4_15: {
        name: 'Banana appears at specific y position',
        failureMessage: 'The banana should appear at y=170.',
        description: 'Checks if bananas appear at the correct y position. Bananas must appear at y = 170.'
    },
    step4_17: {
        name: 'Only one banana',
        failureMessage: 'During the game, only one banana should be visible. Two bananas can be visible if they share the exact same position.',
        description: 'Checks if only one banana is visible during the game. Two bananas can be visible if they share the exact same position.'
    },
    step4_18: {
        name: 'Delayed banana fall',
        failureMessage: 'The banana should wait for one second before falling down at the beginning.',
        description: 'Tests if the banana waits for one second before falling down at the beginning.'
    },
    step4_19: {
        name: 'Delayed banana touch ground',
        failureMessage: 'The banana should wait for one second after touching the ground before falling down again.',
        description: 'Tests if the banana waits for one second after touching the ground before falling down again.'
    },
    step4_23: {
        name: 'Banana caught by bowl points',
        failureMessage: 'The points should increase by 8 when the banana is caught by the bowl.',
        description: 'Tests if bananas give 8 points when they touch the bowl.'
    },
    step4_24: {
        name: 'Banana touches ground points',
        failureMessage: 'The points should decrease by 8 when the banana touches the ground.',
        description: 'Checks if bananas deduct 8 points when they touch the ground.'
    },
    step4_25: {
        name: 'Banana touches ground message',
        failureMessage: 'The banana should say \'-8\' for one second when it touches the ground.',
        description: 'Checks if bananas display a message when they touch the ground.'
    },
    /**
     * Success
     */
    successTitle: 'Congratulations!',
    successMsg: 'Great job! Now you can test your skills in fruit catching. If you want, you can modify the game at any time and add more fruits - maybe even melons. You can also check and improve your code quality.'
};
