const resultDisplay = document.getElementById('result');

const weatherResult = window.localStorage.getItem('finalResult');

resultDisplay.textContent = weatherResult;

