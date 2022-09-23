class Person {

    // static favoriteDessert = "Chocolate Cookie";

	constructor(name, age){
		this.name = name; 
		this.age = age
	};

	toString(){
		console.log("NAME - ", `${this.name}`);
		console.log("AGE - ", `${this.age}`);	
	};

    getDesc() {
        return `${this.name} is year ${this.age} Old`;
    }

	static ageDiff(person1, person2){
		return Math.abs(person1.age - person2.age); 
	}
}

class Employee extends Person {
	constructor(name, age, salary, title){
		super(name, age);
		this.salary = salary;
		this.title = title;
	}

	toString(){
		console.log("NAME - ", `${this.name}`);
		console.log("AGE - ", `${this.age}`);
		console.log("SALARY - ", `${this.salary}`);
		console.log("TITLE - ", `${this.title}`);
	}

    getDesc(){
        let desc = super.getDesc();
        // return  `${this.name} is year ${this.age} Old and working as ${this.title} with salary ${this.salary}`;
        return  desc + `and working as ${this.title} with salary ${this.salary}`;
    };
}

let createPersonObject = () => {
	let person = new Person("Joe", 22);
	console.log("PERSON :: ", `person ${person.name}`);
	person.toString();	
    console.log(person.getDesc());
    console.log("Intance of :: ", person instanceof Person);
}

let createEmployeeObject = () => {
	let employee = new Employee("Joe", 22, 1000, "Developer");
	console.log("EMPLOYEE :: ", `employee ${employee.name}`);
	employee.toString();	
    console.log(employee.getDesc());
    console.log("Intance of :: ", employee instanceof Person);
}

let showAgeDiff = () => {
	let person1 = new Person("Joe", 22);
	let person2 = new Person("Mary", 25);
	console.log("AGE DIFF :: ", Person.ageDiff(person1, person2));
}

let arrayReduce = () => {
	const numbers = [1800, 50, 300, 20, 100];

	// subtract all numbers from first number
	// since 1st element is called as accumulator rather than currentValue
	// 1800 - 50 - 300 - 20 - 100
	let difference = numbers.reduce(
	(accumulator, currentValue) => accumulator - currentValue
	);
	console.log(difference); // 1330

	const expenses = [1800, 2000, 3000, 5000, 500];
	const salary = 15000;

	// function that subtracts all array elements from given number
	// 15000 - 1800 - 2000 - 3000 - 5000 - 500
	let remaining = expenses.reduce(
	(accumulator, currentValue) => accumulator - currentValue,
	salary
	);
	console.log(remaining); // 2700
}

let sumReducer = () => {
	const numbers = [1, 2, 3, 4, 5, 6];

	function sum_reducer(accumulator, currentValue) {
	return accumulator + currentValue;
	}

	let sum = numbers.reduce(sum_reducer);
	console.log(sum); // 21

	// using arrow function
	let summation = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue
	);
	console.log(summation); // 21
}


let runAll = () => {
	createPersonObject();
	showAgeDiff();
	createEmployeeObject();
	arrayReduce();
	sumReducer();
}
