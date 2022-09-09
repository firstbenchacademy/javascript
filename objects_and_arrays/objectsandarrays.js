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

let runAll = () => {
	createPersonObject();
	showAgeDiff();
	createEmployeeObject();
}
