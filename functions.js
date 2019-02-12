function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 3));
function getName(firstName, lastName) {
    if (lastName === undefined)
        return firstName;
    return firstName + ' ' + lastName;
}
function myVoid() {
    return;
}
console.log(getName('Raphael'));
var type = document.getElementById('type');
type.innerHTML = 'from type script';
