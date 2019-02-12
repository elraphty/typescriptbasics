function getSum(num1: number, num2: number):number {
  return num1 + num2;
}

console.log(getSum(1, 3));

function getName(firstName: string, lastName?: string):string {
  if(lastName === undefined) return firstName;
  return firstName + '' + lastName;
}

console.log(getName('Raphael'));