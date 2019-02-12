class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User created: '+ this.name);
  }
}

let john = new User('Raphael', 'elraphtyofficial@gmail.com', 23);

console.log(john.age);