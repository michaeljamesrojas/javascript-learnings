function fizzBuzz(){
    let inputNum = parseInt(prompt("Please input a number for FizzBuzz: "));
    for(let ctr = 1; ctr <= inputNum; ctr++){
        if(ctr % 3 == 0 && ctr % 5 == 0){
            console.log("FizzBuzz");
        }

        else if(ctr % 3 == 0){
            console.log("Fizz");
        }
        
        else if(ctr % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(ctr);
        }
    }
return 
}

function lastLetter(texting){
    let str = "";
    str = texting;
    // console.log(str.toUpperCase());
    return str.slice(-1);
    // return str.charAt(str.length - 1);
}

//backtick example   ``
let name = "Mic";
let surname = "Roj";
let fullname = `Fullname is: ${name + " " + surname}`;
alert(fullname);

//Example of no nme function
const myButton = document.querySelector("button");
myButton.onclick = function(){alert("I am a function with no name.");};

//Example adding new element
const butt = document.querySelector(".button");
const butt2 = document.createElement("button");
butt.parentNode.appendChild(butt2);
// console.dir(butt.nextSibling);


// From Odin instructions
const container = document.querySelector('#container');//get div container

const content = document.createElement('div');//create new div
content.classList.add('content');//add class name
content.textContent = 'This is the glorious text-content!';

//create p element red
const parag = document.createElement("p");
parag.style.color = 'red';
parag.textContent = "Hey! I'm red";

//create h3 element blue
const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "Hey! I'm blue H3";

//create new pink div
const pinkDiv = document.createElement('div');
//create h1
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
//add h1 to pinkDiv
pinkDiv.appendChild(h1);
//create p
const paraPink = document.createElement('p');
paraPink.textContent = "ME TOO!";
//add p to pinkDiv
pinkDiv.appendChild(paraPink);

//add the elements to DOM
container.appendChild(content);
container.appendChild(parag);
container.appendChild(h3);
container.appendChild(pinkDiv);

//create canvas element

