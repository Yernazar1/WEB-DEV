function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
//Answer: an error.
//Try it:
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let userr = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined