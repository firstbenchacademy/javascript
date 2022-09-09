/*
	Javascript : Control Flow 
*/

let personObjects = [
	{ 	"name" : "Joe",
	  	"title" : "Developer",
	  	"age" : 30},
  	{ 	"name" : "Mary",
  		"title" : "Architect",
  		"age" : 40},
  	{ 	"name" : "Smith",
  		"title" : "UI/UX Developer",
  		"age" : 35}
];

// for (;;) loop
let forsemicolon = () => {
	for(let i = 0; i < personObjects.length; i++){
		console.log("FOR SEMICOLON ::", " Persons :: " + personObjects[i].name);
	}
}

// for ..of loop
let for_of_loop = () => {
	for(let person of personObjects){
		console.log("FOR OF_LOOP ::", " Persons :: " + person.name);
	}
}

// for-in loop
let for_in_loop = () => {
	for(let index in personObjects){
		console.log("FOR IN_LOOP ::", " Persons :: " + personObjects[index].name);
	}	


	let person = personObjects[0];
	for(let key in person){
		console.log("FOR IN_LOOP OF KEYS IN OBJECT ::", ` Persons :: ${key} :: ` + person[key]);
	}
}



// forEach loop
let for_each_loop = () => {
	// personObjects.forEach(function(person){  --> Below line is using arrow operator
	personObjects.forEach((person) => {
		console.log("FOREACH_LOOP ::", " Persons :: " + person.name);
		}
	)
}

// while loop
let whileLoop = () => {
	var i = 0;
	while(i < personObjects.length){
		console.log("WHILE_LOOP ::", " Persons :: " + personObjects[i].name);
		i++;
	}
}

// do-while loop
let doWhileLoop = () => {
	var i = 0;
	do{
		console.log("DO_WHILE_LOOP ::", " Persons :: " + personObjects[i].name);
		i++;
	}while(i < personObjects.length)
}

// switch case control
let switchCase = (num) => {
	switch (parseInt(num)){
		case 1 : 
			console.log("SWITCHCASE :: ", `Value of num is "ONE"`);
			break;
		case 2 : 
			console.log("SWITCHCASE :: ", `Value of num is "TWO"`);
			break;
		default: 
			console.log("SWITCHCASE :: ", `Value of num is UNFOUND`);
	}

}

let tryCatch = () => {
  try {
    // someyadafunction();
    mimicThrowError();
  } catch (err) {
    console.error("ERROR", "Error caused by :: " + err.error);
  } finally {
    console.log("This will print no matter what !!")
  }
}

let mimicThrowError = () => {
  // throw "mimicThrowError :: I am an Error";
  throw {"error" : "This error thrown from mimicThrowError"}
}


let ternaryOper = (num) => {
	var a = parseInt(num);
	console.log("a value :: ", a);

	if(a < 6){
		if(a % 2 === 0){}
			else{}
	}else{

	}

	(a < 6) ? 
		(a % 2 === 0) ? 
			console.log("a is lesser and even") 
			: console.log("a is lesser and Odd")
		: console.log("a is greater");
	
}

// let runAll = function() {  ---> Below line is using arrow operator to create function
let runAll = () => {
	console.log("RUN ALL ::", " Start Running all functions");
	forsemicolon();
	for_of_loop();
	for_in_loop();
	for_each_loop();
	whileLoop();
	doWhileLoop();
	tryCatch();
	console.log("RUN ALL ::", " Finish Running all functions");
}