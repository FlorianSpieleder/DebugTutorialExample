import * as testSuites from '../testcases';
import {TestRunner} from "whisker-main/whisker-main"

const runTest = function (vm, tutorialID, step) {
    let tests = [];
    let summary;
    const testRunner = new TestRunner();
    let steps = Object.values(testSuites[tutorialID]);
    console.log(JSON.stringify(steps))
    for (let i = 0; i <= step; i++) {
        steps[i].forEach(function (element) {
            tests.push(element)
        });
    }
    const testId = "TutorialTests";
    const props = {};
    const project = vm.toJSON();
    props['projectName'] = testId;
    props['tutorial'] = true;
    props['accelerationFactor'] = 10
    summary = testRunner.runTests(vm, project, tests, undefined, props, {});
    return summary.then(result => {
        const details = [];
        const testResults = result[0].TutorialTests;
        for (let i = 0; i < testResults.length; i++) {
            const testResult = testResults[i];
            details.push({
                test: testResult.test.name,
                result: testResult.status,
                testId: testResult.test.id,
                testDescription: testResult.test.description
            });
        }
        vm.runtime.quit();      // Reset the steppingInterval to re-enable GreenFlag
        vm.loadProject(project); // workaround that enables that scripts work after tests
        for (const element of result[0][testId]) {
            if (element.status !== 'pass') {
                return {
                    passed: false,
                    step: element.test.step,
                    messageId: element.test.id,
                    details: details
                };
            }
        }
        return {
            passed: true,
        };
    });
};

export {runTest};
