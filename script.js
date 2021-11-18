'use strict'
function todolist(){
	let create = document.querySelector('.createnewlistitem')
	let add = document.querySelector('.addnewlistitem')
create.addEventListener('click',function(){
	document.querySelector('.createlistitem').classList.toggle('active');
	document.querySelector('.createlistitem').classList.toggle('notactive');
})
add.addEventListener('click',function addlistitem(){
	document.querySelector('.createlistitem').classList.toggle('notactive');
	document.querySelector('.createlistitem').classList.toggle('active');
	let div = document.createElement('div')
	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	let p = document.createElement('p');
	let list = document.querySelector('.list');
	let del = document.createElement('input');
	del.type = 'button';
	div.classList.add('listitem');
	p.classList.add('listitemtext');
	del.classList.add('deletelistitem');
	div.appendChild(checkbox);
	div.appendChild(p);
	div.appendChild(del);
	del.value = 'Удалить'
	del.addEventListener('click',function (){
		let closest = del.closest('div');
		list.removeChild(closest);
	})
	if(document.querySelector('.popup-text').value != '')
	{
		p.innerText = document.querySelector('.popup-text').value;
		
	}
	else{
		alert('вы не заполнили поле')
		return;
	}
	
	list.appendChild(div);
	document.querySelector('.popup-text').value = '';
})
}
todolist();