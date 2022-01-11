//colors array 

let colors = ['black', 'blue', 'green', 'orange', 'red', 'purple', 'pink', 'brown', 'teal', 'black'];

let growButton = document.getElementById('growBtn');

growButton.addEventListener('click', function(){
    document.getElementById('crate').style.height = '1000px'
});

//blue

let blueButton = document.getElementById('blueBtn');

blueButton.addEventListener('click', function(){
    document.getElementById('crate').style.backgroundColor = 'blue'
});

//fade function using opacity change 

let fadeButton = document.getElementById('fadeBtn');

fadeButton.addEventListener('click',function(){
    document.getElementById('crate').style.opacity = '50%'
});

//reset to original dimensions

let resetButton = document.getElementById('resetBtn');

resetButton.addEventListener('click',function(){
    document.getElementById('crate').style.backgroundColor = "seagreen"
    document.getElementById('crate').style.opacity = "100%"
    document.getElementById('crate').style.height = '500px'
    document.getElementById('crate').style.width = '500px'
});

//make small

let shrinkButton = document.getElementById('tiny');

shrinkButton.addEventListener('click',function(){
    document.getElementById('crate').style.height = '50px'
    document.getElementById('crate').style.width = '50px' 
    
});

//color randomizer

let randomButton = document.getElementById('randomizer');

randomButton.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementById('crate').style.backgroundColor = randomColor;
});