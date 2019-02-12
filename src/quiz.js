const quizForm = document.getElementById('quiz-form');
const energyLevel = document.getElementById('energy');



quizForm.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        energy: energyLevel.value,
        color: formData.get('color'),
        vacation: formData.get('vacation')
    };

    console.log(answers);
});