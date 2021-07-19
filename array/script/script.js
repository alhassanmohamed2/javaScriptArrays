//All Methods and the Explanation is copied & Pasted form Mozilla Site By Alhassan Mohamed
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//Note: I put around each related block of code a scope {} to destory every object and variables
//after the scope ends to make every block an individual programe at its own.
(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));

//----------------------------------Array_Methods start----------------------------------------\\
//(1)
/* The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array. */
{
console.log("Concat")
var arr = [ "javaScript", "Java", "C#", "C++", "Koltin", "Ruby", "Python" ];
console.log(arr);
var c_arr = ["Visual Basic", "XMl"];
console.log(arr.concat(c_arr));
console.log("--------------------------------------------\n")
}
//-------------------------------------------------------------------------
//(2)
//Copies a sequence of array elements within the array.
{
    console.log("Copy")
    console.log(arr.copyWithin(1,3,5)); //copied the values for index 3 -> 4 to index 1
    console.log("--------------------------------------------\n")

}
//--------------------------------------------------------------------------
//(3)
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.
{
    console.log("Every")
const isBelowThreshold = (currentValue) => currentValue < 40;
const e_arr = [1, 30, 39, 29, 10, 13];
console.log(e_arr.every(isBelowThreshold))
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(4)
//The fill() method changes all elements in an array to a static value,
//from a start index (default 0) to an end index (default array.length). It returns the modified array.
{
    console.log("Fill")
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(5)
//The filter() method creates a new array with all elements that pass the test 
//implemented by the provided function.
{
    console.log("Filter")
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(6)
/*The find() method returns the value of the first element in 
the provided array that satisfies the provided testing function.*/
{
    console.log("Find")
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(7)
/* The findIndex() method returns the index of the first element in the 
array that satisfies the provided testing function. Otherwise, 
it returns -1, indicating that no element passed the test. */
{
    console.log("FindIndex")
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(8)
/* The forEach() method executes a provided function once for each array element.*/
{
    console.log("forEach")
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(9)
/* The includes() method determines whether an array includes a 
certain value among its entries, returning true or false as appropriate. */
{
console.log("includes")

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(10)
/* The indexOf() method returns the first index at which a given element can 
be found in the array, or -1 if it is not present. */
{
    console.log("IndexOf")
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(11)
/* The join() method creates and returns a new string by concatenating all of the elements in 
an array (or an array-like object), separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator. */
{
    console.log("Join")
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(12)
/* The keys() method returns a new Array Iterator object
that contains the keys for each index in the array. */
{
    console.log("Keys")
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(13)
/* The lastIndexOf() method returns the last index at which a given element can be 
found in the array, or -1 if it is not present. 
The array is searched backwards, starting at fromIndex.*/
{
    console.log("LastIndexOf")
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(14)
/* The map() method creates a new array populated with the results of calling a 
provided function on every element in the calling array. */
{
    console.log("Map")
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(15)
/* The entries() method returns a new Array Iterator object that contains the key/value pairs 
for each index in the array.*/
{
    console.log("Entries")

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(16)
/* The pop() method removes the last element from an array and returns that element. 
This method changes the length of the array.*/
{
    console.log("Pop")

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(17)
/* The push() method adds one or more elements to the end of an array and returns the new length of the array.*/
{
    console.log("Push")
    const animals = ['pigs', 'goats', 'sheep'];

    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]
    
    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
    console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(18)
/* The reduce() method executes a reducer function (that you provide) on each 
element of the array, resulting in single output value. */
{
    console.log("Reduce")
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(19)
/* The reduceRight() method applies a function against an accumulator and each value of the array
(from right-to-left) to reduce it to a single value. */
{
    console.log("ReduceRight")
    const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
        (accumulator, currentValue) => accumulator.concat(currentValue)
      );
      
      console.log(array1);
      // expected output: Array [4, 5, 2, 3, 0, 1]
      console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(20)
/* The reverse() method reverses an array in place. The first array element becomes the last,
and the last array element becomes the first. */
{
    console.log("Reverse")
    const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(21)
/* The shift() method removes the first element from an array and returns that removed element.
This method changes the length of the array. */
{
    console.log("Shif")
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(22)
/* The slice() method returns a shallow copy of a portion of an array into
a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. 
The original array will not be modified. */
{
    console.log("Slice")
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(23)
/* The some() method tests whether at least one element in the array passes the test implemented by the provided 
function. It returns a Boolean value. */
{
    console.log("Some")
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(24)
/* The sort() method sorts the elements of an array in place and returns the sorted array. 
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation. */
{
    console.log("Sort")
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(25)
/* The splice() method changes the contents of an array by removing or replacing existing elements and/or 
adding new elements in place. */
{
    console.log("Splice")
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(26)
/* The toLocaleString() method returns a string representing the elements of the array. 
The elements are converted to Strings using their toLocaleString methods and these Strings are separated by 
a locale-specific String (such as a comma “,”).*/
{
    console.log("toLocaleString")
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(27)
//The toString() method returns a string representing the specified array and its elements.
{
    console.log("toString")
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(28)
/* The unshift() method adds one or more elements to the beginning of an array 
and returns the new length of the array.*/
{
    console.log("unshif")
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
console.log("--------------------------------------------\n")
}
//--------------------------------------------------------------------------
//(29)
//The values() method returns a new Array Iterator object that contains the values for each index in the array.
{
    console.log("values")
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
console.log("--------------------------------------------\n")
}
//----------------------------------Array_Methods End----------------------------------------\\







































