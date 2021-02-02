const correctAnswers = ['C', 'A', 'C', 'A', 'B', 'C', 'A', 'D', 'B', 'C'];
const form = document.querySelector('.quiz');
const results = document.querySelector('.quiz-results');


form.addEventListener('submit', e => {
    e.preventDefault(); //Keep page from reloading when submit button is clicked

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // Check the answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    });

    //Show the quiz results

    scrollTo(0, 0); //Make page scroll to the top once user submits the form
    results.classList.remove('display-none');

    let output = 0;
    const timer = setInterval(() => {
        results.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});