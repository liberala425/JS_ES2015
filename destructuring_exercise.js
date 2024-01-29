
//ES5 Assigning Variables to Object Properties

  var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
 var {numbers: {a,b}} = obj;

 //ES2015 One-Line Array Swap with Destructuring
 var arr = [1, 2];
 [arr[1],arr[0]] = [arr[0],arr[1]];

 //raceResults()
 const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
