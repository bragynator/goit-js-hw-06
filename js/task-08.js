const loginFormRef = document.querySelector('.login-form');

const formData = {};

loginFormRef.addEventListener('submit', event => {
	event.preventDefault();

	formData['email'] = event.currentTarget.elements.email.value;
	formData['password'] = event.currentTarget.elements.password.value;

	if (formData.email === '' || formData.password === '')
		return alert('Внимание! Все поля должны быть заполнены!');

	console.log(formData);

	event.currentTarget.reset();
});
