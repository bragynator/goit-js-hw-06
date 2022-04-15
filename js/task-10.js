function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
	const boxes = [];

	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement('div');
		box.style.width = `${30 + 10 * i}px`;
		box.style.height = `${30 + 10 * i}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxes.push(box);
	}

	boxesRef.append(...boxes);
}

function destroyBoxes() {
	inputNumberRef.value = '';
	boxesRef.innerHTML = '';
}

const inputNumberRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => {
	if (inputNumberRef.value === '')
		alert('Введите необходимое количество элементов!');

	createBoxes(inputNumberRef.value);

	inputNumberRef.value = '';
});

destroyBtnRef.addEventListener('click', destroyBoxes);
