import scoreEnergyLevel from '../../src/energy-result.js';
const test = QUnit.test;
QUnit.module('energy test');


let scorecard = null;
QUnit.testStart(function(){
    scorecard = { polarVortex: 0, heatwave: 0, rainbow: 0, cloudyMeatballs: 0 };
});



test('if energyLevel is <=6, increment heatwave +=1', function(assert){
    scoreEnergyLevel('5', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 0, heatwave: 1, rainbow: 0, cloudyMeatballs: 0 });
}); 


test('if energyLevel is >= 7 but <= 12, increment rainbow by 1', function(assert) {
    scoreEnergyLevel('10', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 0, heatwave: 0, rainbow: 1, cloudyMeatballs: 0 });
});

test('if energyLevel is >= 13 but <= 18, increment polarVortex by 1', function(assert) {
    scoreEnergyLevel('14', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 1, heatwave: 0, rainbow: 0, cloudyMeatballs: 0 });
});

test('if energyLevel is >= 19 but <= 25, increment cloudyMeatballs by 1', function(assert) {
    scoreEnergyLevel('22', scorecard);
    assert.deepEqual(scorecard, { polarVortex: 0, heatwave: 0, rainbow: 0, cloudyMeatballs: 1 });
});

