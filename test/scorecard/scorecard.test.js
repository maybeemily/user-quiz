import weatherResult from '../../src/scorecard.js';

const test = QUnit.test;

QUnit.module('scorecard');



test('if polarVortex has most points, return polarVortex', function(assert){
    const result = weatherResult({ polarVortex: 1, heatwave: 0, rainbow: 0, cloudyMeatballs: 0 });
    assert.equal(result, 'You are a Polar Vortex!');
});

test('if heatwave has most points, return heatwave', function(assert){
    const result = weatherResult({ polarVortex: 0, heatwave: 1, rainbow: 0, cloudyMeatballs: 0 });
    assert.equal(result, 'You are a Heatwave!');
});

test('if rainbow has most points, return rainbow', function(assert){
    const result = weatherResult({ polarVortex: 0, heatwave: 0, rainbow: 1, cloudyMeatballs: 0 });
    assert.equal(result, 'You are a Double Rainbow!');
});

test('if cloudyMeatballs has most points, return cloudyMeatballs', function(assert){
    const result = weatherResult({ polarVortex: 0, heatwave: 0, rainbow: 0, cloudyMeatballs: 1 });
    assert.equal(result, 'You are Cloudy with a Chance of Meatballs!');
});