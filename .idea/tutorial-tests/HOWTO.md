## How to create Tutorials

### Add resources
**** 
Add a new folder to the directory [tutorials](src/tutorials) named after the id of the tutorial. 
In this folder you need following files.  
* `index.js`
* A folder named `images`
* `messagesEN.js` 
* For every further language a file named `messages[locale]` with the corresponding locale of your language.  

In the directory tutorials you can also find a file index.js.  
Add following code to export your tutorial: 
``` javascript
exports.[id] = require('./[tutorial-folder]');
```

### index.js 
The index.js file contains basic information about your tutorial. Your index.js file should look like: 
``` javascript
/**
 * Infos about the tutorial.
 * Totalsteps has to be 1 greater than the actual number of steps.
 */
exports.id = 'soccer'; // required
exports.difficulty = 'easy';  // required. Could be 'easy', 'medium' or 'difficult'.
exports.img = require('./images/soccer.png'); // required. The image, that is shown in the main menu.
exports.totalSteps = 7; // required

/**
 * Messages to the user
 */
exports.messagesEN = require('./messagesEN.js'); // required.
// If you provide more than one language, export them too like
exports.messagesDE = require('./messagesDE.js'); 

/**
 * Downloads
 */
exports.totalDownloads = 1; // required. 0 if there are no downloads.
exports.downloadContent1 = require('./images/soccerfield.png');

// required. Every step has an image to show the user, what he is implementing 
// this step. Name it like shown below exports.imageStep[step-number].

/**
 * Images of the steps. 
 */
exports.imageStep1 = require('./images/step1.png');
exports.imageStep2 = require('./images/step2.png');

// required. Every step has an image to show the user the solution of each step.
// Name it like shown below exports.imageSolutionEN[step-number].

/**
 * Images of Solution in English.
 */
exports.imageSolutionEN1 = require('./images/solution1EN.png');
exports.imageSolutionEN2 = require('./images/solution2EN.png');

// If you privide more than one language, add for each language 
// and each step an extra image.
/**
 * Images of Solution in German.
 */
exports.imageSolutionDE1 = require('./images/solution1DE.png');
exports.imageSolutionDE2 = require('./images/solution2DE.png');
```

### images
The folder images contains all the images that are used in the steps.  
For step 1 for example you do have the images `step1.png`, `solution1EN.png` and 
`solution1DE.png`.  
The downloads and the main-menu image are also stored here.

### messagesEN.js 
The messagesEN.js file contains user output for each step. 
Your messagesEN.js should look like:
``` javascript
export default {
    /**
     * Header
     */
    title: `Example`, // required
    difficulty: 'easy', //required

    /**
     * Downloads
     */
     // required. The introduction of the tutorial.
    downloadMessage: 'This is a short example tutorial. You will learn how to create an own tutorials. ' +
        'You will build your code step by step below. Each step will be tested, so it is important that you ' +
        'pay close attention to the description of each step. Before we start, you can download the [background] and ' +
        'then upload it to your project in step 1.',
    download1: 'soccer_field', // required. The title of the download. For every download add another attribute.

    // Each step needs a title, a short description of the step, a detailed instruction and a solution-text.
    /**
     * Step 1
     */
    titleStep1: 'Step 1: Example',
    messageStep1: 'First we need to upload our background.',
    message2Step1: 'First we delete our standard sprite. Subsequently click on \"Choose a sprite\" in the lower right ' +
        'corner. Search for the sprite \"Example\" and select it.',
    solutionStep1: 'After you\'ve uploaded the backdrop and added the sprite, you\'ll need to add the block \"Example\".',

    /**
     * TestHints
     */
    stepBefore1: 'Oh oh. Apparently something works in step ', // required
    stepBefore2: ' no longer. Double check your project. ', // required
    hintMessage: 'Hint: ', // required
    // Each test has an ID. The output should tell the user, what is wrong with his code, and what he should change.
    // Name your attribute after the ID of the test.
    step1_1: 'Your Example sprite does not yet exist or is not yet visible.',
    step1_2: 'Your example is not in starting position (-200, -150). Check your code.',
    step2_1: '',

    /**
     * Success
     */
    successTitle: 'Yeah!', // required
    successMsg: 'Great work, now you can create an exciting tutorial.\n' +
        'If you want, feel free to try other tutorials.' // required
```

## Add test-suits 
****
Add a new folder to the directory [testcases](src/testcases) named after the id of the tutorial.
In this folder you need following files.  
* `index.js`
* For each step a file named `step[step-number].js`
  In the directory tutorials you can also find a file index.js.  
  Add following code to export your tutorial:
``` javascript
exports.[id] = require('./[test-folder]');
```

### index.js
The index.js file should look like: 
``` javascript
exports.step1 = require('./step1.js');
exports.step2 = require('./step2.js');
exports.step3 = require('./step3.js');
// ...
```

### step1.js 
The step1.js files contain whisker-tests. Your file should look like:
``` javascript
const test = async function (t) {
    /* your code here */
    let sprite = t.getSprite('SpriteName');
    await t.runForTime(5000);
    t.end();
}

module.exports = [
    {
        id: 'step1_1',
        step: 1,
        test: test,
        name: 'Example Test',
        description: '',
        categories: []
    }
];
```

Add for each other step another file named step[step-number].js. 
