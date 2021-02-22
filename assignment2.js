/*
Web Development - Spring 2021
Assignment 2
Team members:
  Caitlin-Dawn Sangcap
  Alfonso Gunawan
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

//======================================================================

/*
Without using the native “Array.prototype.map” method of JavaScript, 
compose a function titled “myMap” that will take in an array of elements
and execute a callback function on each of those elements.

Description:
map calls a provided callback function once for each element in an array,
in order, and constructs a new array from the results. callback is invoked only 
for indexes of the array which have assigned values (including undefined).

It is not called for missing elements of the array; that is:

indexes that have never been set;
indexes which have been deleted.

parameters:
  callbacl: Function tat is called for every element of arr. Each time callback
    executes, the returned value is added to newArray.

  currentValue: the current element being processed in the array.
  index(Optional): The index of the current element being processes in the array.
  array(Optional): The array map was called upon.
  thisArg(Optional): Value to use this when executing callback.

returns: A new array with each element being the result of the callback function.
*/



