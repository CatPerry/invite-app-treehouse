//Now we'll write code to accept names into the form and place them in the unordered list ID invitedList
//Now we'll add the names added to the input.value to the unordered list. Remember li elements are children of ul elements so we'll need to use appendChild im guessing.>> We'll need our handler to create a LIST ITEM, then we'll APPEND THAT ELEMENT TO THE UL. 
//Now let's append a checkbox to 
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLi(text) {
	let li = document.createElement('li');
	li.textContent = text;
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	const button = document.createElement('button');
	button.type = 'button';
	button.textContent = 'Remove';
	li.appendChild(button);
	return li;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';
	const li = createLi(text); 
	ul.appendChild(li);
});

//Add an event handler to the checkbox. When the checkbox is cheked we’l add a class of RESPONDED  to the list item. Note i've also move the above UL const declaration to the global scope to be able to access it. 
ul.addEventListener('change', (e) => {
//Get a reference the checkbox itself
	const checkbox = event.target;
//once we have the value of the checkbox, which wll be true if the box is checked and false if it's not, we'll store it in a variable named checked. 
	const checked = checkbox.checked;
//Since we'll change the value of the CLASS once the checkbox is checked, we'll need a reference ot the list item. The list item is the checkbox's GRANDPARENT, because the label is the child of a the list item and the checkbox is the child of the label. So we can traverse to the list item by calling parentNode TWICE.
	const listItem = checkbox.parentNode.parentNode; 
//Set class name of responded (which we have a CSS Styling for) if checkbox is checked. And delete calssName if FALSE. We'll use an if statement for this.
	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});

ul.addEventListener('click', (e) => {
//Remove listItem when button is clicked. Use the parent element NOT THE BUTTON, a syou started to do, since a lot of list elements may be added and delelted from this list. 
	if (e.target.tagName === 'BUTTON') {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});
