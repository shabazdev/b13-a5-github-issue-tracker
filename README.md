# B13-A5-Github-Issue-Tracker question and answeres

## 1. What is the difference between `var`, `let`, and `const`?

### Answere:

The difference between `var`, `let`, and `const` is

- `var` - Is a global scoped and if we use `var` we can re-declare, re-assaign the variable and we can access it from anywhere.
- `let` - Is a block scoped and if we use this we cant re-declare in the same scope and we cant access it outside of scope but we can re-assaign the values.
- `const` - Is a block scoped and if we use this we cant re-declare or re-assaign that in the same scop but we can able to change the values.

## 2. What is the spread operator (...)?

### Answere:

The spread oparetor in javaScript is used for extracting the values from array/objects.

### Example:

```js
// fro array
const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];
console.log(copyArr);

// for object
const user = {
    name: 'Shabaz Mahamood',
    age: 22,
    role: 'Full Stack Developer',
};

const copyObj = { ...user };
console.log(copyObj);
```

## 3. What is the difference between map(), filter(), and forEach()?

### Answere:

The difference between `map()`, `filter()`, and `forEach()` is

- `map()` - Is used for transform each element of an array and returns a new array.
- `filter()` - Is used for selecting a spacefic elements based on a condition and returns a new array.
- `forEach()` - Is used for itarate each element and perform spacific oparetions but its dosnt return anything.

### Example:

```js
// for map()
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((n) => n * 2);

// for filter()
const evenNum = arr.filter((n) => n % 2 === 0);

// for forEach()
arr.forEach((n) => console.log(n * 2));
```

## 4. What is an arrow function?

### Answere:

An arrow function is a shorter and modern ES6 way to write a function in javascript.

### Example:

```js
// before ES6
function addToNum(num1, num2) {
    return num1 + num2;
}

// after ES6
const addToNum = (num1, num2) => {
    return num1 + num2;
};

// more shorter
const addToNum = (num1, num2) => num1 + num2;
```

## 5. What are template literals?

### Answere:

Template literals is a spacial type of string used in javascrpt, for using we use backtick(`) insted of double-qoutes/single-qoutes, This Template literals string are allow us to use multi line strings and insert variables or expressions.

### Example:

```js
const name = 'Shabaz Mahamood';
const role = 'Full-Stack developer';

const text = `My name is ${name} and I am a ${role}`;

console.log(text); // shabaz mahamood and I am a Full-Stack developer.
```
