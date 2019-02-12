import weatherResult from './scorecard.js';
import scoreEnergyLevel from './energy-result.js';


const quizForm = document.getElementById('quiz-form');
const energyLevel = document.getElementById('energy');
const userName = document.getElementById('name');

const jsonString = window.localStorage.getItem('userInfo');
const user = JSON.parse(jsonString);

userName.textContent = user.name;


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

    const scorecard = {
        polarVortex: 0,
        heatwave: 0,
        rainbow: 0,
        cloudyMeatballs: 0
    };  
    
    scoreEnergyLevel(answers.energy, scorecard);
    const finalResult = weatherResult(scorecard);
  
    //will always just be one result! 
    window.localStorage.setItem('finalResult', finalResult);

    window.location = 'results.html';
    
});