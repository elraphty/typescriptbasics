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

  payInvoice() {
    console.log(this.name + ' paid Invoice');
  }
}

// let john = new User('Raphael', 'elraphtyofficial@gmail.com', 23);

// console.log(john.register());

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let member = new Member(1, 'Raphael', 'elraphtyofficial@gmail.com', 23);

console.log(member.payInvoice());