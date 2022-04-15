const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

decBtnRef.addEventListener('click', () => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
});

incBtnRef.addEventListener('click', () => {
	counterValue += 1;
	valueRef.textContent = counterValue;
});
