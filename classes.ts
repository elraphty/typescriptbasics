class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created: '+ this.name);
  }

  register() {
    console.log(this.name + ' is now registered');
  }
}

let john = new User('Raphael', 'elraphtyofficial@gmail.com', 23);

console.log(john.register());