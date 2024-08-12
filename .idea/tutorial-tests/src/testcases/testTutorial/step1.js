const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];
const boatAtPosition = async function (t) {
    t.greenFlag();
    let asteroid = t.getSprites()[0];
    console.log(JSON.stringify(t.getSprites()))
    t.assert.ok(boat.x > 150, "boat.x is below -140");
    t.end();
}

const boatAtPosition2 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[2];
    t.assert.ok(boat.x > 0, "boat.x is below 0");
    t.end();
}

const boatAtPosition3 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[2];
    t.assert.ok(boat.x > -100, "boat.x is not over 150");
    t.end();
}

module.exports = [
     {
        id: 'step1_1',
        step: 1,
        test: boatAtPosition,
        name: 'Ateroiden bewegen sich',
        description: 'DEBUGGING_ERROR',
        categories: [],
    },
    {
        id: 'step1_2',
        step: 1,
        test: boatAtPosition2,
        name: 'Raumschiff bewegt sich',
        description: '',
        categories: []
    },
    {
        id: 'step1_3',
        step: 1,
        test: boatAtPosition3,
        name: 'Erde dreht sich',
        description: '',
        categories: []
    }
];
