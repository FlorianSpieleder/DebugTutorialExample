const winning = async function (t) {
    let boat = t.getSprites()[0];
    await t.runForSteps(2);
    t.greenFlag();
    await t.runForSteps(1);
    t.addInput(0, {device: 'mouse', x: boat.x, y: boat.y, steps: 3});
    await t.runForSteps(3);
    //with this construction the position of the sprite is forcefully changed to be near coast
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }

    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.addCallback(() => {
        if (!touchedIsland && (boat.isTouchingColor([209, 186, 119]) || boat.isTouchingColor([212, 194, 123]) || boat.isTouchingColor([207, 202, 120]))) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 4000);
}

const boatIsWinningText = async function (t) {
    await winning(t);
    await t.runForSteps(5);
    let boat = t.getSprites()[0];
    let saySomething = false;
    t.addCallback(() => {
        if (!saySomething && (boat.sayText !== '')) {

            saySomething = true;
        }
    }, true);
    await t.runUntil(() => saySomething === true, 2000);

    t.assert.ok(saySomething, 'Boat says nothing after victory');
    t.end();
}

const boatWinningCostume = async function (t) {
    await winning(t);
    let boat = t.getSprites()[0];
    let costumeChange = false;
    t.addCallback(() => {
        if (!costumeChange && boat.getCostumeByIndex(boat.currentCostume).name === 'Festbeleuchtung') {
            costumeChange = true;
        }
    });
    await t.runUntil(() => costumeChange, 4000);
    t.assert.ok(costumeChange, 'Boat did not change costume after touching island ' + boat.getCostumeByIndex(boat.currentCostume).name);
    t.end();
};

module.exports = [
    {
        id: 'step4_1',
        step: 4,
        test: boatIsWinningText,
        name: 'boat says something after victory',
        description: '',
        categories: []
    }, {
        id: 'step4_2',
        step: 4,
        test: boatWinningCostume,
        name: 'boat changes costume after victory',
        description: '',
        categories: []
    }
];

