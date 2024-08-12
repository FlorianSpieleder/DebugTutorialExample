const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];


const boatMoveUp = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites()[0];
    t.greenFlag()
    //await t.runForSteps(2);
    //send a simulated event/input to the testdrive so mouse is moved to boat.x/100 for a duration of 60 steps
    t.mouseMove(-190, 75, 60);
    let boatY = boat.y;
    for (const target of t.vm.runtime.targets) {
        if (spriteNames.includes(target.sprite.name)) {
            target.setXY(-190, -150, true);
            break;
        }
    }
    //the Callback that was added is executed in ALL runs after their addition
    await t.runUntil(() => (boatY < boat.y), 2000);
    
    t.assert.ok((boatY < boat.y), 'Boat did not move');
    t.end();
};

const boatMoveRight = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites()[0];
    t.greenFlag()
    t.mouseMove(-170, -150, 60);

    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(-200, -150, true);
            break;
        }
    }
    let boatX = boat.x;
    let boatDirection = boat.direction;
    //the Callback that was added is executed in ALL runs after their addition
    await t.runUntil(() => boatX < boat.x && boatDirection !== boat.direction, 2000);
    t.assert.ok(boatX < boat.x, 'Boat did not move');
    t.end();
};

const boatMoveLeft = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites()[0];
    t.greenFlag();
    //await t.runForSteps(2);
    t.mouseMove(-220, -150, 60);

    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(-190, -150, true);
            break;
        }
    }
    let boatX = boat.x;
    let boatDirection = boat.direction;

    //the Callback that was added is executed in ALL runs after their addition
    await t.runUntil(() => (boatX > boat.x && boatDirection !== boat.direction), 2000);
    t.assert.ok((boatX > boat.x), 'Boat did not move');
    t.end();
};

const boatMoveDown = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites()[0];
    t.greenFlag();
   // await t.runForSteps(2);
    t.mouseMove(-190, -170, 60);

    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(-190, -150, true);
            break;
        }
    }
    let boatY = boat.y;
    let boatDirection = boat.direction;
    //the Callback that was added is executed in ALL runs after their addition
    await t.runUntil(() => (boatY > boat.y && boatDirection !== boat.direction), 2000);
    t.assert.ok((boatY > boat.y), 'Boat did not move');
    t.end();
};


module.exports = [
    {
        id: 'step2_1',
        step: 2,
        test: boatMoveUp,
        name: 'boat move up',
        description: '',
        categories: []
    },
    {
        id: 'step2_2',
        step: 2,
        test: boatMoveRight,
        name: 'boat move right',
        description: '',
        categories: []
    },
    {
        id: 'step2_3',
        step: 2,
        test: boatMoveLeft,
        name: 'boat move left',
        description: '',
        categories: []
    }
    , {
        id: 'step2_4',
        step: 2,
        test: boatMoveDown,
        name: 'boat move down',
        description: '',
        categories: []
    }
];
