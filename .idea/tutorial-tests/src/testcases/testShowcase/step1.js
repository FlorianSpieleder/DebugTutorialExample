const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];
const xBigger150 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > 150, "boat.x is below -140");
    t.end();
}

const xBigger0 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > 0, "boat.x is below 0");
    t.end();
}

const xBiggerMinus100 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > -100, "boat.x is not over 150");
    t.end();
}

module.exports = [
     {
        id: 'step1_1',
        step: 1,
        test: xBigger150,
        name: 'Ship x-position > 150',
        description: '',
        categories: [],
    },
    {
        id: 'step1_2',
        step: 1,
        test: xBigger0,
        name: 'Ship x-position > 0',
        description: 'DEBUGGING_ERROR',
        categories: []
    },
    {
        id: 'step1_3',
        step: 1,
        test: xBiggerMinus100,
        name: 'Ship x-position > -100',
        description: '',
        categories: []
    }
];
