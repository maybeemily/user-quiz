import weatherResult from './scorecard.js';
import scoreEnergyLevel from './energy-result.js';


const quizForm = document.getElementById('quiz-form');
const energyLevel = document.getElementById('energy');



quizForm.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(quizForm);

        
    const answers = {
        // scoreEnergyLevel(answers.energy, scorecard)
        energy: energyLevel.value,
         // scoreColor(answers.color, scorecard)
        color: formData.get('color'),
       // scoreVacation(answers.vacation, scorecard)
        vacation: formData.get('vacation')
    };

        // weatherResult(scorecard)
    const scorecard = {
        polarVortex: 0,
        heatwave: 0,
        rainbow: 0,
        cloudyMeatballs: 0
    };

    scoreEnergyLevel(answers.energy, scorecard);
    console.log(scorecard);

    //window.location = 'results.html';
    console.log(answers);
});