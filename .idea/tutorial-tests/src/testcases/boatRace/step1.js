const spriteNames = ['boot', 'Boot', 'Schiff', 'schiff', 'boat', 'Boat'];
const boatAtPosition = async function (t) {
    let arrived;
    let boat = t.getSprites()[0];

    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(-196, -17, true);
            break;
        }
    }

    t.greenFlag();

    let noMoveInput = {device: 'mouse', x: boat.x, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, noMoveInput);
    await t.runForSteps(4);
    t.assert.ok(Math.round(boat.x) >= -210 && Math.round(boat.x) <= -170 && Math.round(boat.y) >= -170 && Math.round(boat.y) <= -120, 'boat has to be in the harbor');
    t.end();
}

const boatCostume = async function (t) {
    let boat = t.getSprites()[0];
    t.mouseMove(-190, 0, 60);
    for (const target of t.vm.runtime.targets) {
        if (spriteNames.includes(target.sprite.name)) {
            target.currentCostume = 1;
            break;
        }
    }
    t.greenFlag()
    await t.runForSteps(1);
    //check if the boat has the right costume
    t.assert.ok(boat.currentCostume === 0, 'boat must have the right costume');
    t.end();
}

const boatDirection = async function (t) {
    let boat = t.getSprites()[0];

    let boatPointsUpwards = false;
    t.addCallback(() => {
        if (!boatPointsUpwards && (boat.direction <= 10 && boat.direction >=-10)) {
            boatPointsUpwards = true;
        }
    }, false);
    t.mouseMove(-190, 0, 60);
    t.greenFlag();
    await t.runUntil(() => boatPointsUpwards, 2000);
    t.assert.ok(boatPointsUpwards, 'boat has to face upwards');
    t.end();
};

module.exports = [
     {
        id: 'step1_1',
        step: 1,
        test: boatAtPosition,
        name: 'boat is in the harbor',
        description: '',
        categories: []
    }, {
        id: 'step1_2',
        step: 1,
        test: boatDirection,
        name: 'boat faces upwards after initialisation',
        description: '',
        categories: []
    }, {
        id: 'step1_3',
        step: 1,
        test: boatCostume,
        name: 'normal costume after initialisation',
        description: '',
        categories: []
    }
];
