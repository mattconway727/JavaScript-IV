// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

const louis = new Person({
  name: "louis",
  age: 31,
  location: "cali",
  gender: "m"
});

console.log(louis);
louis.speak();

class Instructor extends Person {
  constructor(instructor) {
    super(instructor);
    this.specialty = instructor.specialty;
    this.favLanguage = instructor.favLanguage;
    this.catchPhrase = instructor.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

const matt = new Instructor({
  name: "Matt",
  age: 34,
  location: "TN",
  gender: "M",
  specialty: "something",
  favLanguage: "JavaScript",
  catchPhrase: "sup"
});
console.log(matt);

matt.speak();
matt.demo("React");

class Student extends Person {
  constructor(student) {
    super(student);
    this.previousBackground = student.previousBackground;
    this.className = student.className;
    this.favoriteSubjects = student.favoriteSubjects;
  }

  listsSubjects(favoriteSubjects) {
    console.log(`These are my favorite subjects: ${favoriteSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR on ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const taylor = new Student({
  name: "Taylor",
  age: 27,
  location: "TN",
  gender: "F",
  previousBackground: "vet tech",
  className: "WebPT5",
  favSubjects: "math"
});

console.log(taylor);
taylor.listsSubjects(["math, music, art"]);
taylor.PRAssignment("node.js");
taylor.sprintChallenge("CSS");

class ProjectManager extends Instructor {
  constructor(pm) {
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @ channel standy times!`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const maddy = new ProjectManager({
  name: "Maddy",
  age: 1,
  location: "TN",
  gender: "F",
  specialty: "barking",
  favLanguage: "DoggyScript",
  catchPhrase: "Woof Woof",
  gradClassName: "Chewaholics",
  favInstructor: "Matt"
});

console.log(maddy);
maddy.grade(taylor, "javascript");
maddy.standUp("webpt5");
maddy.debugsCode(taylor, "classes and constructors");
