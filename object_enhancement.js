/*Same keys and values*/
/*
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

/*Computed Property Names*/
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */
var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


/* Object Methods */
/*
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  */
 /* Write an ES2015 Version */
  var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  /*createAnimal function*/
  function createAnimal(name, verb, noise){
    return {
        species: name,
        [verb]() //verb updated from string to a key name
        {  
            console.log(noise);
        }
    }
  }