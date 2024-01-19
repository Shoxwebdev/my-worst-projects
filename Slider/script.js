  var userAge = confirm("Siz 18 yoshdan kattamisiz ?");
  console.log(userAge);

  var userName = prompt("Ismingiz nima ?", "userName");
  console.log(userName);
  const a = "";
  console.log(a);
  const answers = [];
  answers[0] = prompt("Ismingiz nima ?");
  answers[1] = prompt("Familiyangiz nima ?");
  answers[2] = prompt("Yoshingiz nechida ?");
  console.log(answers);

  const firstName = prompt("ISmin nima");
  console.log(typeof firstName);
  console.log(firstName + 10);
  // document.write(answers);

  const ogoh = alert("Hello world");
  console.log(typeof ogoh);
  ("use strict");
  const firstName = "Samar";
  const age = 21;
  console.log(`Mani ismim ${firstName} va mening yoshim ${age}`);
  console.log(`mani ismim ${firstName} va mani yoshim ${age}`);

  const xName = prompt("Enter your name", "Charlie");
  console.log(`User's name is ${xName}`);

// operatorlar
 ("use strict");
 const x = 10,
   y = 15;
 console.log(x + y);
 console.log(5 - 5);
 console.log(5 / 5);
 console.log(5 * 5);

 console.log(5*5*5*5)

 console.log("hello" + " " + "world");
 console.log(4 + "radio");
 const num = 4 + "radio";
 console.log(typeof num);
 let z = 10;
 const a = "abc";
 var name = "shoh";
 let myAge = 21;
 const myName = "Shohruh";
 console.log(z++);
 console.log(String.fromCharCode(189, 43, 190, 61));

function * generator() {
  yield "hello";
  yield "my";
  yield "name";
  yield "is";
  yield "shohruh";
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value);
