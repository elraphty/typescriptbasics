var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    return User;
}());
var john = new User('Raphael', 'elraphtyofficial@gmail.com', 23);
console.log(john.age);
