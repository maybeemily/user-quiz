function weatherResult(scorecard) {
    const polarVortex = scorecard.polarVortex;
    const heatwave = scorecard.heatwave;
    const rainbow = scorecard.rainbow;
    const cloudyMeatballs = scorecard.cloudyMeatballs;

    if(polarVortex > heatwave 
        && polarVortex > rainbow
        && polarVortex > cloudyMeatballs){
        return 'You are a Polar Vortex!';
    }
    if(heatwave > rainbow
        && heatwave > cloudyMeatballs) {
        return 'You are a Heatwave!';
    }
    if(rainbow > cloudyMeatballs) {
        return 'You are a Double Rainbow!';
    }
    return 'You are Cloudy with a Chance of Meatballs!';
}

export default weatherResult;