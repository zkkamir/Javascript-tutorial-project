const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
movieList.style.display = "block";

const userChosenKeyName = "level";

let person = {
    "first name": "amir",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    [userChosenKeyName]: '...',
    greet: function () {
        alert("Hi there!");
    },
    1.5: "hello"
};

// person.age = 23;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = "first name";

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);

// person.greet();
