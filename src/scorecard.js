function weatherResult(scorecard) {
    const polarVortex = scorecard.polarVortex;
    const heatwave = scorecard.heatwave;
    const rainbow = scorecard.rainbow;
    const cloudyMeatballs = scorecard.cloudyMeatballs;

    if(polarVortex > heatwave 
        && polarVortex > rainbow
        && polarVortex > cloudyMeatballs){
        return 'polarVortex';
    }
    if(heatwave > rainbow
        && heatwave > cloudyMeatballs) {
        return 'heatwave';
    }
    if(rainbow > cloudyMeatballs) {
        return 'rainbow';
    }
    return 'cloudyMeatballs';
}

export default weatherResult;