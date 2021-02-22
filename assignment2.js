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
const arr1 = [1,2,3,4];
function isOddNumber(number){
	return number % 2;
}

const cb1 =(x) =>{
	console.log(isOddNumber(x));
};

const print1 = (x) => console.log(x);

print1("myEach() test:")
arr1.myEach(cb1);
print1("--");
arr1.myEach(print1);

//======================================================================

/*

map()

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

Array.prototype.myMap = function(callback) 
{
	//no idea what to put. please help
	//I have no clue what to do here. This makes no sense to me.
};

//Testing
const arr2 = [1,2,3,4];
function timesTwo(number){
	return number * 2;
}
const cb2 =(x) => {
	console.log(timesTwo(x))
};

print1("myMap() test:");

//var arr3=[];
print1(cb2);
//print1(arr3);


//======================================================================

/*
filter()

Without using the native “Array.prototype.filter” method of JavaScript, 
compose a function titled “myFilter” that will take in an array of elements 
and execute a callback function on each of those elements.

The filter() method creates a new array with all elements that pass 
the test implemented by the provided function.

Description

filter() calls a provided callback function once for each element in an 
array, and constructs a new array of all the values for which callback 
returns a value that coerces to true. callback is invoked only for indexes 
of the array which have assigned values; it is not invoked for indexes which 
have been deleted or which have never been assigned values. Array elements 
which do not pass the callback test are skipped, and are not included in 
the new array.

Parameters:

callback
Function is a predicate, to test each element of the array. Return a 
value that coerces to true to keep the element, or to false otherwise.

It accepts three arguments:
  currentValue: The current element being processed in the array.
  index(Optional): The index of the current element being processed in the array.
  array(Optional): The array filter was called upon.
  thisArg(Optional): Value to use as this when executing callback.

Return value: A new array with the elements that pass the test. 
    If no elements pass the test, an empty array will be returned.
*/
