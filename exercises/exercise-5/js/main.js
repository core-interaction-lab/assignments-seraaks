const myButton = document.getElementById('btn-1');

const myButton2= document.querySelector('.btn')

const allButtons = document.querySelector('.btn');

var copy="this is var copy";

myButton= document.getElementById('btn-2');

console.log(copy);


console.log(myButton);
console.log(allButtons);

myButton.addEventListener('click', function(event){
    alert('I clicked the button');

}
);