const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
	inputRef.classList.value = '';

	if (event.currentTarget.value.length === 0) return;

	event.currentTarget.value.length === Number(inputRef.dataset.length)
		? inputRef.classList.add('valid')
		: inputRef.classList.add('invalid');
});
