const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
	//button click active class. Lo recorremos, escuchamos con un click y seleccionamos para añadirle la clase de botón activo. Una vez hecho, a los demás se les cambia la clase de activo a ninguna
	for(let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', function(){
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
			this.className += ' active-btn';
		})
	}
}

pageTransitions();
