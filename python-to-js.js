// // Python 
// apples = 14
// print(apples)

// print(f"I have {apples} apples.")

// JavaScript
const apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`);


// Python
// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.',
// }

// Javascript
const materials = ['wood', 'metal', 'stone'];
const words = {
    elephant: "The world's largest land mammal.",
    school: "A place of learning.",
    iceCream: "A delicious milk-based dessert."
};


// Python
// num = 16
// if num > 10:
//   print(f"{num} is greater than 10.")
// elif num == 10:
//   print(f"{num} is exactly 10.")
// else:
//   print(f"{num} must be less than 10.")

// JavaScript
const num = 16;

if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} most be less than 10.`)
}


// Python
// for x in range(0,10):
//   print("Doing the same thing over and over.")

// JavaScript
for (x = 0; x < 10; x++) {
    console.log("Doing the same thing over and over.")
};


// Python 
// base = 5
// for num in range(0,20):
//   print(num + base)

// JavaScript
const base = 5;

for (i = 0; i < 20; i++) {
    console.log(i + base)
};


// Python
// total = 0
// for num in range(0,100):
//   total += num

// print(total)

// JavaScript
total = 0;

for (y = 0; y < 100; y++) {
    total += y;
};

console.log(total);


// Python 
// for height in range(3,15):
//   if height > 9:
//     print("You can get on the rollercoaster!")
//   else:
//     print("You are too short to ride this rollercoaster.")

// JavaScript
for (height = 3; height < 15; height++) {
    if (height > 9) {
        console.log("You can get on the rollercoaster!");
    } else {
        console.log("You are too short to right this rollercoaster.");
    }
}


// Python
// containers = ['purse', 'wallet', 'backback']
// for container in containers:
//   print(container)

// JavaScript
containers = ['purse', 'wallet', 'backback'];

for (i = 0; i < containers.length; i++) {
    console.log(containers[i])
}


// Python
// def hello_world():
//   return "Hello world!"

// hello_world()

// Javascript
function helloWorld() {
    return console.log("Hello World!")
};

helloWorld();

// Python
// def add(first_num, second_num):
//   return first_num + second_num

// amount = add(5, 7)
// print(amount)

// JavaScript
function add(first_num, second_num) {
    return first_num + second_num
};

let amount = add(5, 7);
console.log(amount)