function scoreEnergyLevel(energyLevel, scorecard) {
    if(energyLevel <= 6) {
        scorecard.heatwave += 1;
    } 
    else if(energyLevel >= 7 && energyLevel <= 12) {
        scorecard.rainbow += 1;
    }
    else if(energyLevel >= 13 && energyLevel <= 18) {
        scorecard.polarVortex += 1;
    }
    else if(energyLevel >= 19 && energyLevel <= 25) {
        scorecard.cloudyMeatballs += 1;
    }
}

export default scoreEnergyLevel;