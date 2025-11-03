import './style.css';

// class Entity {
//   constructor(age) {
//     this.age = age;
//   }
// }

// class Person extends Entity {
//   name = 'John Doe';
// }

// const entity1 = new Entity(12);
// console.log(entity1);
// entity1.age = 14;
// console.log(entity1);

// const entity2 = new Entity(9);
// console.log(entity2);
// console.log(entity1);

// const person1 = new Person();

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Cheff extends Person {
  constructor(name, experience) {
    super(name);

    this.experience = experience;
  }

  logGreeting() {
    return `Hello, I am ${this.name}, I have ${this.experience} years of experience`;
  }
}

const cheff1 = new Cheff('John Doe', 3);
const cheff2 = new Cheff('Jane Doe', 4);

cheff1.logGreeting();
cheff2.logGreeting();

function handleLog(cb) {
  console.log(cb());
}

handleLog(cheff1.logGreeting.bind(cheff1));
