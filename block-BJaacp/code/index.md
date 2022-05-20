1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false there is no variable like this
- What is the value of obj? // {surname: 'Stark'} because this value is not addes it is replaced with first obj
- `obj == newObj` // false because they have different address and value
- `obj === newObj` // false because they have different address and value and string
- `user === newObj`// false because they have different address and value and string
- `user == newObj`// false because they have different address and value
- `user == obj` // true because of same address and value
- `arr == arr2` // true due to same value and address
- `arr === arr2`// true due to same value and address


2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./screenshot.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);{name: 'Alex', age: 25}
console.log(person2);{name: 'John', age: 50}
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true as they have same value due to copy by reference
console.log(user.brothers.length === brothers.length); //2. true as they have same value due to copy by reference
```
