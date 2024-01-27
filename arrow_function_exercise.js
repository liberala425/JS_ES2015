function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //ES2015 refactor
const double_arrow = (arr) => arr.map(val => val*2)

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  
    //ES2015 refactor
const squareAndFindEvens_arrow = (numbers)=>{
    const squarers = numbers.map(val => val**2);
    const evens = squarers.filter(val => val % 2 === 0);
    return evens;
}