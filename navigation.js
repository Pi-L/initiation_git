const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function () {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	document.body.classList.toggle('noscroll');
	menu.hidden = !menu.hidden;
});