const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];
const xBigger0 = async function (t) {
    t.greenFlag();
    let boat = t.getSprites()[0];
    t.assert.ok(boat.x > 0, "boat.x is below 150");
    t.end();
}

module.exports = [
     {
        id: 'step2_1',
        step: 2,
        test: xBigger0,
        name: 'Level2: Ship x-position > 0',
        description: 'DEBUGGING_ERROR',
        categories: []
    }
];
