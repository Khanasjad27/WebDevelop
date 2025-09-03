// Factory Function

// function personMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, I am ${this.name}`);
//         },
//     };
    
//     return person;
// }

// Constructor 
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, I am ${this.name}`);
// }

// Classes
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`hi, I am ${this.name}`);
//     }
// }

// let p1 = new Person("asjad" , 20);
// let p2 = new Person("aqsa",15);


// Inheritance
class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, I am ${this.name}`);
    }
}

class Student extends Parent{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}

class Teacher extends Parent{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}
