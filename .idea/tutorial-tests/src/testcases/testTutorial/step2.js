const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];
const boatAtPosition = async function (t) {
    t.greenFlag();
    await t.runForSteps(4);
    t.assert.equal("c","c", "c is equal to c");
    t.end();
}

const boatAtPosition2 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > 0, "boat.x is below 150");
    t.end();
}

const boatAtPosition3 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > 150, "boat.x is not over 150");
    t.end();
}

module.exports = [
     {
        id: 'step2_1',
        step: 2,
        test: boatAtPosition,
        name: '2boat is in the harbor5',
        description: '',
        categories: []
    },
    {
        id: 'step2_2',
        step: 2,
        test: boatAtPosition2,
        name: '2boat is in the harbor6',
        description: '',
        categories: []
    },
    {
        id: 'step2_3',
        step: 2,
        test: boatAtPosition3,
        name: '2boat is in the harbor7',
        description: '',
        categories: []
    }
];
