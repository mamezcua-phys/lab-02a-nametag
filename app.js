const myName = document.getElementById('userName'); 
const myInput = document.getElementById('name-input');
const myButtonName = document.getElementById('name-button');

const myBackground = document.getElementById('nametag-color');
const myPink = document.getElementById('pinkButton');
const myGreen = document.getElementById('lightGreenButton');
const myBlue = document.getElementById('lightBlueButton');

myButtonName.addEventListener('click', ()=> {
    const userNameInput = myInput.value;
    myName.textContent = userNameInput;
})

myPink.addEventListener('click', () => {
    myBackground.style.backgroundColor = 'pink';
})
myGreen.addEventListener('click', () => {
    myBackground.style.backgroundColor = 'lightgreen';
})
myBlue.addEventListener('click', () => {
    myBackground.style.backgroundColor = 'lightblue';
})