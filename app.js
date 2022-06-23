console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return function (){
        return number + plusNumber;
    };
}



//Exercise 2
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) => {
   console.log(user.name);
   });
  

//Exercise 3: map
console.log("EXERCISE 3:\n==========\n");

// 'user' refers to where the data for 'user' is stored.
let newUsers = users.map((user) => {
    return {name: user.name, score: user.score};
});

console.log(newUsers);

// Exercise 4: filter
console.log("EXERCISE 4:\n==========\n");

let activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers);

// Exercise 5: sort
console.log("EXERCISE 5:\n==========\n");
// dot notation refers to the values within the array
// they are referenced to be used within the given function



users.sort((a, b) => {
    if (a.score < b.score) return 1;
    else return -1;
});

console.log(users);

// Exercise 6: reduce
console.log("EXERCISE 6:\n==========\n");
let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

/*
let avgScore = users.reduce((sum, user, i, arr) => {
    if (i == arr.length -1){
        return (sum + user.score) / arr.length;
    } else {
        return sum + user.score;
    }
}, 0);
*/
console.log(avgScore);