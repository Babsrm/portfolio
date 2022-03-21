const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
	//button click active class. Lo recorremos, seleccionamos todas las que tengan la clase activa y la metemos en una variable. se le cambia el botón de activo por ninguno y al objeto que hemos escuchado, le añadimos la clase de activo
	for(let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', function(){
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
			this.className += ' active-btn';
		})
	}
  //section active class
  allSections.addEventListener('click',(ev)=>{
    const id = ev.target.dataset.id;
    if(id){
      //remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      ev.target.classList.add('active')

      //hide other sections
      sections.forEach((section) =>{
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}



pageTransitions();
