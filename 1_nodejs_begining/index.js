console.log("hello worls!");

function add(a,b)
{
    return a+b;
}

console.log(add); // return function definition

console.log(add()); // retunr NAN

console.log(add(1,2)); // return a+b;

// return array of objects
//1. folder in which node is installed 
//2. working directory path

console.log(process.argv); //used for command line arguments

var args = process.argv.splice(2); //splice node folder and working directory both

console.log(args);  // return array of objects

//how to call a function from command line arguments
console.log("addition of two numbers from command line arguments:",add(parseInt(args[0]),parseInt(args[1])));