'use strict';

const box = document.querySelectorAll('.box');
for(let i = 0; i < box.length; i++){
	box[i].addEventListener('click', fadeOut);
}

function fadeOut(event){
	const currentTarget = event.currentTarget;
	// for fade out animation effect 
	currentTarget.classList.add('fade');
	
	const delayInMilliseconds = 200; // 0.2 second
	setTimeout(function() {
		hideElement(currentTarget);
	}, delayInMilliseconds);
}

/*
// hides sections  
const section = document.querySelectorAll('section');
for(let i = 0; i < section.length; i++){
	section[i].querySelector('p').textContent = 'no peeking!';
	
	const img = section[i].querySelector('img');
	hideElement(img);
	
	const ul = section[i].querySelector('ul');
	hideElement(ul);
	
	const span = section[i].querySelector('span');
	hideElement(span);
}*/

function hideElement(element){
	// if the element is found
	if(element){
		element.classList.add('hidden');
	}
}

// click for kisses (image changes)
const kissImage = document.getElementById('kissImage');
kissImage.addEventListener('click', changeImage);

let clickCount = 0;
function changeImage(){
	if(clickCount == 0){
		kissImage.setAttribute('src', 'assets/kiss1.png');
		clickCount++;
	} else if(clickCount == 1){
		kissImage.setAttribute('src', 'assets/kiss2.png');
		clickCount++;
	} else if(clickCount == 2){
		kissImage.setAttribute('src', 'assets/kiss3.png');
		clickCount++;
	} else if(clickCount == 3){
		// reset 
		kissImage.setAttribute('src', 'assets/kiss0.png');
		clickCount = 0;
	}
}

// phone rings
const phone = document.getElementById('phone');
function phoneRings(){
	phone.classList.toggle('ringing');
}

const ringingInterval = setInterval(phoneRings, 200);
phone.addEventListener('click', pickUp);

// stops ringing and plays voice note
function pickUp(){
	clearInterval(ringingInterval);
}

// vinyl disc spinning 
const disc = document.getElementById('disc');
function spinDisc(){
	disc.classList.toggle('spinning');
}

setInterval(spinDisc, 700);