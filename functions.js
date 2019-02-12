function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 3));
function getName(firstName, lastName) {
    if (lastName === undefined)
        return firstName;
    return firstName + '' + lastName;
}
console.log(getName('Raphael'));
