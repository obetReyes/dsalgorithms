/*
Array Operations
insert — O(n)
delete — O(n)
read one value — O(1) /* because when the array was created the computer assigned a linear mememory for it stores them in contiguous and adjacent memory locations. so the computer nows where exactly are the values for the array
search for some value — O(n)
*/



/* basic operations */



/** ##########33 3 ways to iterate an array #################3 **/
const array: String[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']
for(let i=0; i<array.length; i++) {
    console.log(array[i])
}

for(const item of array) {
    console.log(item)
}

array.forEach(item => {
    console.log(item)
})


/* ################33 add items ############333 */

/** add to the end **/
array.push('lion')

/** add to the beginning **/
array.unshift('raccoon')

/** add in a specific index position **/
array.splice(3, 0, 'squirrel') // add 8 in the index 3




/*  ################ remove items #################333 */
/** remove from the end **/

array.pop()

/** remove from the beginning **/
array.shift()

/** remove from a specific index position **/
array.splice(2, 1) // remove from index 2



/*  ############# linear search in typescript #################3333 */

function linearSearch(arr, target) {
    for (let i in arr) {
      if (arr[i] === target) return i
    }
    return -1 /*  If the target isn’t found, then we simply return -1 at the end of the function. */
  }

  /*
  linear search performance 
  best time  0(1) if the target is the frist value in array
  averange o(n)
  worst o(n)
  space complexity o(1)
  */


/* ################# bianry search in typescript #####################3 */ 

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}


/* 
Binary search shines when you are maintaining something in sorted order, and doing repeated search queries on it. 
It’s also important to realize that there usually isn’t a single data structure or
algorithm that is perfect for every situation. For example, just because ordered
arrays allow for binary search doesn’t mean you should always use ordered
arrays. In situations where you don’t anticipate searching the data much, but
only adding data, standard arrays may be a better choice because their
insertion is faster.


*/
