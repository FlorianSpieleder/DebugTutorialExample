const crash = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites()[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let boatY = boat.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 0, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    //onSpriteMoved is a special Callback that looks each time a Sprite has moved
    t.addCallback(() => {
        if (!touchedWall && (boat.isTouchingColor([95, 53, 13]) || boat.isTouchingColor([102, 59, 0]) || boat.isTouchingColor([102, 64, 0]))) {
            touchedWall = true;
            boatX = boat.x;
            boatY = boat.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 4000);
    t.assert.ok(touchedWall === true, 'Boat did not touch wall');
}

const boatCrashCostume = async function (t) {
    await crash(t);
    let boat = t.getSprites()[0];
    let costumeChange = false;
    t.addCallback(() => {
        if (!costumeChange && boat.getCostumeByIndex(boat.currentCostume).name === 'kaputt') {
            costumeChange = true;
        }
    });
    await t.runUntil(() => costumeChange, 4000);
    t.assert.ok(costumeChange, 'Boat did not change costume after touching wall ' + boat.getCostumeByIndex(boat.currentCostume).name);
    t.end();
};

const boatCrashText = async function (t) {
    await crash(t);
    await t.runForSteps(5);
    let boat = t.getSprites()[0];
    let saySomething = false;
    t.addCallback(() => {
        if (!saySomething && (boat.sayText !== '')) {
            saySomething = true;
        }
    }, true);
    await t.runUntil(() => saySomething === true, 2000);

    t.assert.ok(saySomething, 'Boat says nothing after crash');
    t.end();
};


module.exports = [
    {
        id: 'step3_1',
        step: 3,
        test: boatCrashText,
        name: 'boat says text after crash',
        description: '',
        categories: []
    }, {
        id: 'step3_2',
        step: 3,
        test: boatCrashCostume,
        name: 'boat change costume after crash',
        description: '',
        categories: []
    }
];
