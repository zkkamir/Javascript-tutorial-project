const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
movieList.style.display = "block";

let person = {
    "first name": "amir",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    greet: function () {
        alert("Hi there!");
    }
};

// person.age = 23;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

console.log(person["first name"]);

// person.greet();
