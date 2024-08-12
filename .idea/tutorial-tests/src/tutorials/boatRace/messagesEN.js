export default {
    /**
     * Header
     */
    title: `Boat Race`,
    difficulty: 'medium',

    /**
     * Downloads
     */
    downloadMessage: 'In this tutorial we are going to create a boat race together. The object of the game is to maneuver ' +
        'the boat as quickly as possible through a parkour made of wooden walls. You will build your code step by step below. ' +
        'Each step will be tested, so it is important that you pay close attention to each step. Before we start, you can ' +
        'download the boat and the parkour and then upload it to your project in step 1.',
    download1: 'Stage',
    download2: 'Boat',

    /**
     * Step 1
     */
    titleStep1: 'Step 1: starting position',
    messageStep1: 'First we have to add our boat and our parkour and then bring the boat to the starting position.',
    message2Step1: 'Delete the existing sprites and then click on \"Upload sprite\" ' +
        'at the bottom right. Now select the previously downloaded Boat.png. Name your character \"Boot\" and set the size ' +
        'to 10. You can also upload the stage design using the \"Upload Backdrop\" option at the bottom right.\n Now add ' +
        'suitable blocks so that the boat is at the position (- 190, -150) and points in the direction of 0 as soon as the ' +
        'green flag has been clicked.',
    solutionStep1: 'After you have uploaded the boat and the scenery, you have to add the block \"When green flag clicked\". ' +
        'Below you put the blocks \"point in direction 0\" and \"go to x: -190, y: -150\".',

    /**
     * Step 2
     */
    titleStep2: 'Step 2: control the boat',
    messageStep2: 'Next we want to be able to control our boat with the mouse. To do this, we need to add some blocks to ' +
        'the boot script.',
    message2Step2: 'Add an infinite repetition below the blocks you added in step 1.\n In this you check whether the distance ' +
        'to the mouse is greater than 5. If this is the case, the boat should turn in the direction of the mouse pointer ' +
        'and take a step.',
    solutionStep2: 'Add the block \"forever\" under your previous blocks. You can find this under the category control. ' +
        'There you will also find the block \"if ..., then\". You have to add a comparison here as to whether the \"distance ' +
        'to mouse pointer > 5\". \n In the condition, add the blocks \"point toward mouse pointer\" and \"move 1 steps\".',

    /**
     * Step 3
     */
    titleStep3: 'Step 3: crashing',
    messageStep3: 'We can now steer our boat. However, it can still drive through our walls. We are now implementing that ' +
        'our boat will be destroyed if it comes into contact with a wall.',
    message2Step3: 'We must first give our boat a new costume. To do this, go to the Costumes tab and add a new costume. ' +
        'Name this \"crash\". Use the \"Select\" tool and pull apart individual parts of our boat. Once you\'ve done this, ' +
        'we need to build a block structure into our infinite repetition, that will check if the boat is touching the color of ' +
        'the wall.(Important! Use exactly this color so that the test works: color 6, saturation 70 and brightness 46!) Within ' +
        'the condition, our boat should change the costume to crash, say \"Noooo!\" for 1 second, then switch back the costume ' +
        'and go to our starting point(-190, -150).',
    solutionStep3: 'After you have created the costume crash, add the following blocks within the endless loop. You first need ' +
        'the block \"If touching color, then \". Select the color of the wall (6, 70, 46). Within these blocks you add the ' +
        'following blocks one after the other: \"switch costume to crash\", \"say Noooo! For 1 second\", \"switch costume to boat\" ' +
        'and \"go to x: -190 y : -150 \".',

    /**
     * Step 4
     */
    titleStep4: 'Step 4: win',
    messageStep4: 'If you have successfully maneuvered the boat through the parkour and arrive at the island, you have won. ' +
        'We now have to add this function',
    message2Step4: 'To do this, after checking whether the boat is touching a wall, we build a similar structure. First add ' +
        'a comparison whether the boat is touching the color (color 13, saturation 47, lightness 100). If this is the case, let ' +
        'the boat say \"Yeah!\" For 2 seconds and stop everything.',
    solutionStep4: 'You first need the block \"If touching color, then \". Select the color (13, 47, 100). Within these blocks ' +
        'you add the following blocks one after the other: \"say Yeah! for 2 seconds\" and \"stop all\".',

    /**
     * Step 5
     */
    titleStep5: 'Step 5: measure time',
    messageStep5: 'Now let\'s add a stopwatch to the race.',
    message2Step5: 'Create your own new variable for this and call it \"time\". Add a new event \"When green flag pressed\" ' +
        'to your script. Then set your variable time to 0 and create an infinite repetition. In this you wait 0.1 seconds and ' +
        'then increase your variable by 0.1.',
    solutionStep5: 'After you have created your variable time, add the block \"When green flag clicked\". Below you set the block ' +
        '\"set my variable to 0\". Replace my variable with your created variable time. Add a block of \"forever\" You need the blocks ' +
        '\"wait 0.1 seconds\" and \"change my variable by 0.1\". Again, replace my variable with time.',

    /**
     * Step 6
     */
    titleStep6: 'Step 6: obstacles',
    messageStep6: 'Our boat race is already working. Now let\'s add a few more obstacles.',
    message2Step6: 'Create a new figure and name it \"Gate\". Draw a rectangle the same color as the wall (6, 70, 46). It ' +
        'is important that the figure is in the middle of the painting surface. Slide the gate to an empty space in the parkour. ' +
        'The place as in the example photo would adapt. In addition, you can draw a few white arrows in the color (color 0, ' +
        'saturation 100, brightness 100) in the set. You can draw as many arrows as you like, but an arrow must be circled ' +
        'in the same place as in the picture for this test to work. Now let\'s add the appropriate parts to our scripts. Add ' +
        'a query to the boat\'s infinite loop as to whether it touches the white paint. If this is the case, the boat should ' +
        'take 3 steps. In the script of the figure \"Gate\" you implement that when the green flag has been clicked, ' +
        'the gate rotates infinitely clockwise by 1 degree.',
    solutionStep6: 'After you\'ve modified your parkour, add a query to the boat\'s script as to whether it touches the ' +
        'color (0, 100, 100). Under this you add the block \"move 3 steps\". In the script of the figure \"Gate\" you need ' +
        'the blocks \"when green flag clicked\", \"forever \" and \"turn 1 degree\".',

    /**
     * TestHints
     */
    stepBefore1: 'Oh oh. Apparently something works in step ',
    stepBefore2: ' no longer. Double check your project. ',
    hintMessage: 'Hint: ',
    step1_1: 'Your boat is not visible. Change this on the right under the stage.',
    step1_2: 'Your boat is not at position (-190, -150). Add a suitable block for this.',
    step2_1: 'Your boat is not moving properly yet. Do you turn your boat in the direction of the mouse pointer? Do you ' +
        'move 1 step?',
    step2_2: 'Your boat continues to move even though the distance to the mouse is less than 5.',
    step3_1: 'Your boat doesn\'t say \"Noooo!\", when it hits the wall.',
    step3_2: 'Your boat will not go back to the position (-190, -150) after hitting the wall.',
    step3_3: 'Your boat doesn\'t change costumes.',
    step4_1: 'You don\'t win when you get to the island. Does your boat say \"Yeah\"? Check your code.',
    step5_1: 'The variable time doesn\'t exist yet or is named otherwise.',
    step5_2: 'Unfortunately, your stopwatch is not working correctly yet. Check your script.',
    step6_1: 'Your figure Gate is not yet visible. Change this on the right under the stage.',
    step6_2: 'Your gate isn\'t turning yet. Check the script of the gate figure.',
    step6_3: 'Your boat won\'t go faster if it hits a white arrow.',

    /**
     * Success
     */
    successTitle: 'Yeah!',
    successMsg: 'Great job, now you can transport your boat through the parkour and fight for the best time with your friends. ' +
        'If you want, you can modify the parkour at any time or add other obstacles - maybe there are still some sharks on the way.\n ' +
        'If you want, you can also try out other tutorials.'
};
