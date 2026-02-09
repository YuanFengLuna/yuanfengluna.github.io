/**
 * Quiz logic — extracted from inline home.html
 * Coffee reward quiz with QR code for perfect scores
 */
(function () {
    // Only initialize if quiz elements exist on page
    if (!document.getElementById('quiz-entrance')) return;

    var quizQuestions = [
        {
            prompt: "How do I like to take my coffee on a workday?",
            options: ["Latte", "Americano"],
            correctIndex: 1
        },
        {
            prompt: "Am I a morning person or night person?",
            options: ["Morning", "Night"],
            correctIndex: 0
        },
        {
            prompt: "Which one is more like my comfort food?",
            options: ["\ud83c\udf63", "\ud83e\udd5f"],
            correctIndex: 1
        },
        {
            prompt: "How do I get fit?",
            options: ["Strength Training", "Cardio & HIIT"],
            correctIndex: 0
        },
        {
            prompt: "How tall am I?",
            options: ["5'9", "5'4"],
            correctIndex: 0
        },
        {
            prompt: "What name do I call my cat?",
            options: ["Cat", "Sesame"],
            correctIndex: 0
        },
        {
            prompt: "What is my MBTI?",
            options: ["ENTP", "INTJ"],
            correctIndex: 1
        }
    ];

    var currentQuestion = 0;
    var score = 0;

    function startQuiz() {
        document.getElementById('quiz-entrance').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('total-questions').textContent = quizQuestions.length;

        var questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = '';

        quizQuestions.forEach(function (question, index) {
            var questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            questionElement.id = 'question-' + (index + 1);
            questionElement.style.display = index === 0 ? 'block' : 'none';

            var promptElement = document.createElement('p');
            promptElement.className = 'quiz-prompt';
            promptElement.textContent = question.prompt;
            questionElement.appendChild(promptElement);

            var optionsContainer = document.createElement('div');
            optionsContainer.className = 'quiz-options';

            question.options.forEach(function (option, optionIndex) {
                var button = document.createElement('button');
                button.className = 'quiz-option';
                button.textContent = option;
                button.addEventListener('click', function (event) {
                    checkAnswer(index + 1, optionIndex === question.correctIndex, event.currentTarget);
                });
                optionsContainer.appendChild(button);
            });

            questionElement.appendChild(optionsContainer);
            questionContainer.appendChild(questionElement);
        });

        document.getElementById('question-container').scrollIntoView({ behavior: 'smooth' });
    }

    function checkAnswer(questionNum, isCorrect, clickedButton) {
        var options = document.querySelectorAll('#question-' + questionNum + ' .quiz-option');

        options.forEach(function (option) {
            option.disabled = true;
            option.classList.add('disabled');

            if (option === clickedButton) {
                if (isCorrect) {
                    option.classList.add('correct-answer');
                } else {
                    option.classList.add('incorrect-answer');
                }
            }
        });

        if (isCorrect) {
            score++;
        }

        setTimeout(function () {
            if (questionNum < quizQuestions.length) {
                document.getElementById('question-' + questionNum).style.display = 'none';
                document.getElementById('question-' + (questionNum + 1)).style.display = 'block';
                currentQuestion++;
            } else {
                document.getElementById('question-' + questionNum).style.display = 'none';
                document.getElementById('quiz-summary').style.display = 'block';
                document.getElementById('score').textContent = score;

                var totalQuestions = quizQuestions.length;
                var perfectScore = score === totalQuestions;
                var message = document.getElementById('score-message');

                if (perfectScore) {
                    message.textContent = "Perfecto! Friendo Espresso!";
                    message.classList.add('coffee-win');
                    document.getElementById('coffee-reward').style.display = 'block';
                    document.getElementById('try-again-btn').style.display = 'none';
                    generateQR();
                } else if (score >= totalQuestions * 0.7) {
                    message.textContent = "Not far :)))";
                    document.getElementById('coffee-reward').style.display = 'none';
                    document.getElementById('try-again-btn').style.display = 'block';
                } else {
                    message.textContent = "Hello stranger :)";
                    document.getElementById('coffee-reward').style.display = 'none';
                    document.getElementById('try-again-btn').style.display = 'block';
                }
            }
        }, 1000);
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;

        document.getElementById('quiz-summary').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-entrance').style.display = 'block';
        document.getElementById('question-container').innerHTML = '';
    }

    function generateQR() {
        var encodedPhone = "KzE5MTczMjcwODg5";
        var phoneNumber = atob(encodedPhone);
        var message = encodeURIComponent("Hi Yuan! I just aced your quiz and would like to claim my free coffee!");
        var smsLink = 'sms:' + phoneNumber + '?body=' + message;
        var qrApiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(smsLink);

        var qrImage = document.getElementById('coffee-qr');
        qrImage.src = qrApiUrl;
        qrImage.style.display = 'block';
        qrImage.style.maxWidth = '150px';
        qrImage.style.margin = '0 auto';
    }

    // Expose functions to buttons via onclick or event delegation
    var startBtn = document.getElementById('start-quiz-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }

    var tryAgainBtn = document.getElementById('try-again-btn');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', resetQuiz);
    }
})();
