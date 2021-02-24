/*
Web Development - Spring 2021
Assignment 2
Team members:
  Caitlin-Dawn Sangcap (created the file, the repo and did myMap() and myFilter() functions)
  Alfonso Gunawan
  James Yoo (Worked on myLastIndexOf(), grabKeys(), grabValues())
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

const print = (x) => console.log(x);

print("myEach() test:")
arr1.myEach(cb1);
print("--");
arr1.myEach(print);

//======================================================================

/*
Done by: Caitlin-Dawn Sangcap (02/23/21)

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
	var answer = [];
	for (let i =0; i<this.length; i++) {
		//if(this[i]===undefined) {continue;}
		answer.push(callback(this[i], i , this));
	}
	return answer; //returns undefined
};

//Testing
const arr2 = [5,6,7,8];
function timesTwo(number){
	return number * 2;
}

print("myMap() test:");

var trial2 = arr2.myMap(timesTwo);
print(trial2);
print("--");
print(arr2);


//======================================================================

/*

Done by: Caitlin-Dawn Sangcap (02/23/21)

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

//the callback function should be a boolean type function
Array.prototype.myFilter = function(callback)
{
	var answer=[];
	for (let i =0; i<this.length; i++) 
	{
		var check = callback(this[i], i , this);
		if(check == true) {answer.push(this[i]);}
	}
	return answer;
};

//Testing
//function checks if value is greater than the max
function greaterThan10(value){
	return value > 10;
}

const arr4 = [9,10,11,12];
print("myFilter() test:");
var filter_trial = arr4.myFilter(greaterThan10);
print(arr4);
print(filter_trial);

//======================================================================
/*

Done by: James Yoo (02/24/21)

myLastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
compose a function titled “myLastIndexOf” that will take in an array of elements 
and returns the index of the last encounter of a target element (if it is found) or -1 
if that element does not exist within the input array.

Parameters:
	searchElement: The element to locate in the array
	fromIndex(Optional): An index on where to start the search from

Return value: The last index of the element in the array, -1 if not found.
*/

Array.prototype.myLastIndexOf= function(match, from)
{
	let fromIndexs=this.length-1;	//Index to start searching from the back
	if (from>-1 && from<this.length)	//An optional feature fromIndex(second parameter)
	{
		fromIndexs=from;
	} 
	let target=-1;						//This is our return variable
	for (fromIndexs; fromIndexs>0; fromIndexs--)	//Loop through the array to find the match
	{
		if (match===this[fromIndexs])		//Use strictly equal to compare the values in the array
		{
			target=fromIndexs; 
		}
	}
	return target;							
}
//Testing myLastIndexOf()
print("------------------------------")
print("First myLastIndexOf() test:");
const lookUp=1;
const arr10=[2,3,1,4];
let myLastIndexOf_test=arr10.myLastIndexOf(lookUp, 3);
print(`Looking for ${lookUp}`);
print(`Current array: ${arr10}`);
print(myLastIndexOf_test);  //expected output is 2

print("Second myLastIndexOf() test:");
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
const lookUp2='Dodo';
myLastIndexOf_test=animals.myLastIndexOf(lookUp2);
print(`Looking for ${lookUp2}`);
print(`Current array: ${animals}`);
print(myLastIndexOf_test);	//expected output is 3

print ("Third myLastIndexOf() test:")
const lookUp3='Tiger';
myLastIndexOf_test=animals.myLastIndexOf(lookUp3);
print(`Looking for ${lookUp3}`);
print(`Current array: ${animals}`);
print(myLastIndexOf_test); //expected output is 1

print ("Fourth myLastIndexOf() test:")
const lookUp4='Dog';
myLastIndexOf_test=animals.myLastIndexOf(lookUp4);
print(`Looking for ${lookUp4}`);
print(`Current array: ${animals}`);
print(myLastIndexOf_test); //expected output is -1
//======================================================================
/*

Done by: James Yoo (02/24/21)

grabKeys()

Without using the native “Object.keys()” method of JavaScript, compose a function titled 
“grabKeys” that will take in an object and return all of the keys of the key:value pairs of 
that object.


Parameters:
	obj: The object of which the enumerable's own properties are to be returned.

Return value: An array of strings that represent all the enumerable properties of the 
given object.
*/
Object.grabKeys=function(object1)
{
	let return_key=[];			//return array
	for (let item in object1)	//for each loop to get the keys
	{
		return_key.push(item);	//push each key into the array
	}
	return return_key;			//return array of keys of type string
}

//testing Object.grabKeys()
const task= {
	'morning' : 'eat',
	'day':'work',
	'night':'sleep'
};

print("-------------------------------------------")
let grabKeys_test=Object.grabKeys(task);
print(grabKeys_test); //keys should be ['morning', 'day', 'night']
//======================================================================
/*

Done by: James Yoo (02/24/21)

grabValues()

Without using the native “Object.values()” method of JavaScript, compose a function 
titled “grabValues” that will take in an object and return all of the values of the key:value 
pairs of that object.

Parameters:
	obj: The object of which the enumerable's own properties are to be returned.

Return value: An array containing the given object's own enumerable property values.
*/
Object.grabValues=function(object1){
	let return_val=[];					//return array
	for (let item in object1)			//get each key in the object
	{
		return_val.push(object1[item]);	//access the values through the key and then push
	}
	return return_val;					//return the array of values of type string
}

//testing Object.grabValues()
print("-------------------------------------------")
let grabValues_test=Object.grabValues(task);
print(grabValues_test);