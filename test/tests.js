import './quiz-tests/energy-test.test.js';

const test = QUnit.test;
QUnit.module('energy test');

function scoreEnergyLevel(energyLevel, scorecard) {
    if(energyLevel <= 6) {
        scorecard.sunshine += 1;
    }
}


let scorecard = null;
QUnit.testStart(function(){
    scorecard = { polarVortex: 0, sunshine: 0, rainbow: 0, cloudyMeatballs: 0 };
});



test('if energy level is <=6, increment sunshine +=1', function(assert){
    scoreEnergyLevel('5', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 0, sunshine: 1, rainbow: 0, cloudyMeatballs: 0 });
}); 

test('if enerygLevel is >= 7 but <= 13, increment rainbow by 1', function(assert) {
    scoreEnergyLevel('10', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 0, sunshine: 0, rainbow: 1, cloudyMeatballs: 0 });
});