let person = { 
    name : "john doe",
    age : 45,
    sayHello : function(){console.log(`Hi, I am ${this.name}`)}
}

let employee1 = {
    name1 : "mary joe"
}

let anotherPerson = Object.create(person)

let printPersonProtoType = () => {
    console.log("Prototype :: ", person)
    person.sayHello();
}

let printChild = () => {
    console.log("Child :: ", anotherPerson)
    console.log("Child value Name:: ", anotherPerson.name )
    console.log("Child value Age:: ", anotherPerson.age )
}

let changePrototypeVal = () => {
    person.age = 100
}

let printprotoTypeof = () => {
    console.log("ProtoType of anotherPerson : ", Object.getPrototypeOf(anotherPerson));
    console.log("ProtoType of Person : ", Object.getPrototypeOf(person));
}

let introduce = ()=> {
    return `Hi this is ${this.name1}`
}

let setName = () => {
    this.name1 = 'NAME!!'
}

let Car = function(make, color){
    this.make = make;
    this.color = color;
}

let runAll = () => {
    printPersonProtoType();
    printChild();
    changePrototypeVal();
    printPersonProtoType();
    printChild();
    printprotoTypeof();

    console.log("Employee Prototype :: ", employee1);
    employee1.introduce = introduce
    console.log("Employee Prototype :: ", employee1.introduce());
    employee1.setName = setName;
    console.log("Employee Prototype :: ", employee1);
    employee1.setName();
    console.log("Employee :: ", employee1);
    
    setName();
    console.log("After calling SetName on Global Context : ", name1);

    let myCar = new Car("Honda", "Brown");
    console.log("My Car :: ", myCar);
    Car("Chevy", "Black");
    console.log("Car Global :: " , make);
}