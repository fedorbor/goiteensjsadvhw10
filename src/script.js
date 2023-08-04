const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
let countdown = 30;

function startCountdown() {
    startButton.disabled = true;

    const countdownInterval = setInterval(() => {
        countdown -= 0.001; // Зменшуємо на 1 мілісекунду
        timerElement.textContent = countdown.toFixed(2); // Оновлюємо відображення

        if (countdown <= 10) {
            // Додаємо анімацію зміни кольору фону
            timerElement.style.animation = 'countdownAnimation 1s linear infinite';
        }

        if (countdown <= 0) {
            clearInterval(countdownInterval); // Зупиняємо таймер
            timerElement.textContent = 'Час вийшов!';
            // Виконуємо певну дію, наприклад, робимо кнопку знову активною
            startButton.disabled = false;
        }
    }, 1); // Оновлюємо кожну мілісекунду
}


startButton.addEventListener('click', startCountdown);
