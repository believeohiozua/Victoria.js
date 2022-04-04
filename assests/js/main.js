
var victoria = "Owolijah" //initilazation
victoria = "Sonny" //updated varable 
function scriptButtonClick(){
    alert('I am from a script module in the main.js file');
    victoria
}


// traditional function
function  changeBgColor(){
    //target an attribute of the intended element to manipulate
    let main_section = document.getElementById('main-section');
    //get the and manipulate the style attribute of the targeted element
    main_section.style.backgroundColor = 'red';
}
// fat arrow function 
removeBgColor =()=>{
     //target an attribute of the intended element to manipulate
     let main_section = document.getElementById('main-section');
     //get the and manipulate the style attribute of the targeted element
     main_section.style.backgroundColor = '';
}

// changeBgColor();
// var //declare a goable variable
// let // declare a locat variable
// const // declare a constant variable


// TODO:
//write a function that changes the text color to orange and back to white