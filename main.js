const total = document.querySelector('.calculator__total'),
      numbersAll = document.querySelectorAll('.caclulator__numbers'),
      numbers = document.querySelectorAll('.caclulator__numbers-item'),
      operatorsAll = document.querySelectorAll('.calculator__operators'),
      operators = document.querySelectorAll('.calculator__operators-item');


numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        total.innerHTML = e.target.textContent;
    })
})


function countResult(number, operator) {

}