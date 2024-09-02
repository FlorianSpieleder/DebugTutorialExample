

const testBowlInitialization = async function (t) {
    console.log("start bowl init");
    t.seedScratch('seed');
    console.log("1");

    let bowl;

    //bowl = t.getSprites(s => s.isOriginal && isBowl(s))[0];
    //console.log(JSON.stringify(t.getSprites()))

    console.log("1: " + bowl);
    /* Give the program seed time to initialize. */
    await t.runUntil(() => bowl.x === 0 && bowl.y === -145, 500);
    console.log("2");
    t.assert.equal(bowl.x, 0, 'Bowl must start at x = 0.');
    t.assert.equal(bowl.y, -145, 'Bowl must start at y = -145.');
    console.log("3");
    t.end();
    console.log("stop bowl init");
};
const boatAtPosition = async function (t) {

};


module.exports = [
    {
        id: 'step1_1',
        step: 1,
        test: boatAtPosition,
        name: 'Bowl Movement Test',
        description: 'Tests the movement of the bowl sprite. The bowl must move in the respective direction when the left or right arrow key is pressed, and must not move if no arrow key is pressed.',
        categories: []
    },
];
