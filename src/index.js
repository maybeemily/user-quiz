const username = document.getElementById('name');
const userInfoForm = document.getElementById('user-info');

userInfoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const userInfo = {
        name: username.value
    };
    
    const serialize = JSON.stringify(userInfo);

    window.localStorage.setItem('userInfo', serialize);

    window.location = 'quiz.html';
});