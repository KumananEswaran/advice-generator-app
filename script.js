const button = document.querySelector('.button');
const url = '	https://api.adviceslip.com/advice';

button.addEventListener('click', getAdvice);

function getAdvice() {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			document.querySelector(
				'.quote-id'
			).textContent = `ADVICE #${data.slip.id}`;
			document.querySelector('.quote').textContent = data.slip.advice;
		})
		.catch((err) => {
			document.querySelector('.quote-id').textContent = 'error';
			document.querySelector('.quote').textContent = 'error';
		});
}
