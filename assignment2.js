/*
Web Development - Spring 2021
Assignment 2
Team members:
  Caitlin-Dawn Sangcap (created the file, the repo and did myMap() and myFilter() functions)
  Alfonso Gunawan (worked on some, every, reduce)
  James Yoo (Worked on myLastIndexOf(), grabKeys(), grabValues())
  Ifte Ahmed (worked IndexOf, push, includes)
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

//======================================================================
/*
Done by: Ifte Ahmed (02/24/21)
myIndexOf()
Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function 
titled “myIndexOf” that will take in an array of elements and returns the index of the first 
encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
parameters:
	searchElement: element to locate in the array
	fromIndex(optional): An index on where to start the search from
returns value:
	the first index of the element in the array; -1 if not found
*/

Array.prototype.myIndexOf= function(searchElement)
{	
	let result = -1;//output
	for (let index= 0; index < this.length; index++)	//Loop through the array from 0 to end
	{
		if (searchElement===this[index])//Use strictly equal(===) to compare the values in the array
		{
			result=index; //if match switch result with the correct index
		}
	}
	return result;							
}

//above function is missing optional parameters
//======================================================================

/*
Done by: Ifte Ahmed (02/24/21)
myPush()
Without using the native “Array.prototype.push” method of JavaScript, compose a function 
titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.
The push method appends values to an array.
parameters:
	elementN : the elements to add to the end of the array
returns value:
	The new length property of the object upon which the method was called
*/

Array.prototype.myPush= function(...elementN) //spread syntax for multiple elements
{
	for(let item of elementN) //each item of elementN
	{
		this[this.length] = item; //next index in array is set to the new item
	}
	return this.length; //return new length of array
}

//testing for this function
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.myPush('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

const count2= animals.myPush('chickens', 'cats', 'dogs');
console.log(count2);
//expected output: 7
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
//======================================================================
/*
Done by: Ifte Ahmed (02/24/21)
myIncludes()
Without using the native “Array.prototype.includes” method of JavaScript, compose a function 
titled “myIncludes” that will take in an array of elements and indicate whether or not a target element 
is contained within the input array. This returns a boolean.
parameters:
	valueToFind : the value to search for
returns value:
	A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified).
	Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.
*/

Array.prototype.myIncludes= function(valueToFind)
{
	let result = false;
	for(let index=0;index < this.length; index++) 
	{
		if(this[index] === valueToFind) //if items match set result to true
		{
			result =true;
		}
	}
	return result;
}

//testing below
const array1 = [1, 2, 3];
console.log(array1.myIncludes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('cat'));
// expected output: true

console.log(pets.myIncludes('at'));
// expected output: false
//======================================================================



//----------------------------------------------------------------------------------
/*
Done by: Alfonso Gunawan (02/24/21)
some() (aka any())
Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” 
that will take in an array of elements and execute a callback function on each of those elements.

Parameters:
    callback: A function to test for each element, taking three arguments:
    element: The current element being processed in the array.
    index(Optional): The index of the current element being processed in the array.
    array(Optional): The array some() was called upon.
    thisArg(Optional): A value to use as this when executing callback.
Return Value:
    true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
*/

Array.prototype.mySome = function(callback)
{
  //Use a for loop to iterate through the array
  for(let i = 0; i < this.length; i++)
  {
    //Checks if the value in the array is true 
    if(callback(this[i], i , this))
    {
      return true;
    }
  }
  //return false if there are no values in the array that are false
  return false;
}


const array = [2,4,6,8,10,12,14,16];
// will check if an element is odd
const odd = (element) => element % 2 === 1;
console.log(array.mySome(odd));
// the expected output will be: false


//----------------------------------------------------------------------------------------
/*
Done by: Alfonso Gunawan (02/24/21)
every()
Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” 
that will take in an array of elements and execute a callback function on each of those elements.

Parameters:
    callback: A function to test for each element, taking three arguments:
    element: The current element being processed in the array.
    index (Optional): The index of the current element being processed in the array.
    array (Optional): The array every was called upon.
    thisArg (Optional): A value to use as this when executing callback.
Return Value:
    true if the callback function returns a truthy value for every array element. Otherwise, false.
*/

Array.prototype.myEvery = function(callback)
{
  //Use a for loop to iterate through the array
  for(let i = 0; i < this.length; i++)
  {
    //Checks if the value in the array is true 
    if(!callback(this[i], i , this))
    {
      return false;
    }
  }
  //returns true if the above array is not 
  return true;
}

//Testing Area
const isAboveThreshold = (value) => value > 40;
const array = [84, 100, 89, 79, 60, 50,45];
console.log(array.myEvery(isAboveThreshold));
//Expected output should be true as every value is greater than 40

const isBelowThreshold = (value) => value < 60;
const array2 = [1,2,3,4,5,6,7,8]
console.log(array2.myEvery(isBelowThreshold));
//Expected output should be true as it is below 60

const isBelow = (value) => value < 60;
const array3 = [70,21,32,40,5,6,97,8]
console.log(array3.myEvery(isBelow));
//Expected output should be false as 71 is above 60



/*
Done by: Alfonso Gunawan (02/24/21)
reduce()
Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” 
that will take in an array of elements and execute a callback function on each of those elements.

Parameters:
    callback: A function to execute on each element in the array (except for the first, if no initialValue is supplied).
It takes four arguments:
    * accumulator: The accumulator accumulates callback's return values. It is the accumulated value previously returned in 
      the last invocation of the callback—or initialValue, if it was supplied (see below).
    * currentValue: The current element being processed in the array.
    * index Optional: The index of the current element being processed in the array. 
      Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
    * array Optional: The array reduce() was called upon.
    * initialValue Optional: A value to use as the first argument to the first call of the callback.
      If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and 
      skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.
Return Value:
    The single value that results from the reduction.
*/

Array.prototype.myReduce = function(callback)
{
    let sum = 0; //
    for(let i = 0; i < this.length;i++)
    {
      sum = this[i] + sum;
      callback(sum,this[i],i,this);
    }
    return sum;
};


const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.myReduce(reducer));
//expected output should be 10
// 1 + 2 + 3 + 4 = 10

const array2 = [1,2,3,4,5];
const reduce = (accumulator, currentValue) => accumulator + currentValue;
console.log(array2.myReduce(reduce));
//expected output should 15 
// 1 + 2 + 3 + 4 + 5 = 15

const array3 = [2,4,6,7,8,9,10]
const reduced = (accumulator, currentValue) => accumulator + currentValue;
console.log(array3.myReduce(reduced));
//expected output should be 46
//2 + 4 + 6 + 7 + 8 + 9 + 10 = 46