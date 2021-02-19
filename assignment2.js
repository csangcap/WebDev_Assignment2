/*
Web Development - Spring 2021
Assignment 2
Team members:
  Caitlin-Dawn Sangcap
  Alfonso Gunawan
  Ifte Ahmed
  James Yoo
*/

/*
forEach() calls a provided callback function once for each element in 
an array in ascending order. It is not invoked for index properties 
that have been deleted or are uninitialized.

callback is invoked with three arguments:

  1. the value of the element
  2. the index of the element
  3. the Array object being traversed

returns undefined

Sidenote: myEach was done in class
*/
Array.prototype.myEach = function(callback) {
	for (let i =0; i<this.length; i++) {
		if(this[i]===undefined) {continue;}
		callback(this[i], i , this);
	}
	return; //returns undefined
};

//Testing
const arr = [1,2,3,4];
function isOddNumber(number){
	return number % 2;
}

const cb =(x) =>{
	console.log(isOddNumber(x));
};

const print = (x) => console.log(x);

//this = arr
arr.myEach(cb);
print("--");
arr.myEach(print);
