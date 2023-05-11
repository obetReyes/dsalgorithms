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
insertion is faster. The time complexity of the Binary Search algorithm is O(log n)

*/

/* ############ blubble sort  ########### */
function bubbleSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { 
            if (arr[j] > arr[j+1]) {
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux;
            }
        }
    }
    return arr;
}
/* 
The Bubble Sort algorithm contains two kinds of steps:
Comparisons: two numbers are compared with one another to determine
which is greater.
Swaps: two numbers are swapped with one another in order to sort them.
The time complexity of the Bubble Sort algorithm is O(n^2), where "n" represents the number of elements in the array. More specifically, the worst-case time complexity is O(n^2), the average-case time complexity is also O(n^2), and the best-case time complexity is O(n).

In the worst-case scenario, where the array is in reverse order, Bubble Sort needs to perform comparisons and swaps for every pair of elements in the array. 
*/



/* ############ selection sort  ########## */
function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
    let lowestNumberIndex = i;
    for(let j = i + 1; j < array.length; j++) {
    if(array[j] < array[lowestNumberIndex]) {
    lowestNumberIndex = j;
    }
    }
    if(lowestNumberIndex != i) {
    let temp = array[i];
    array[i] = array[lowestNumberIndex];
    array[lowestNumberIndex] = temp;
    }
    }
    return array;
    }
    
/* : in the world of Big O Notation, Selection Sort and
Bubble Sort are described in exactly the same way.
Again, Big O Notation describes how many steps are required relative to the
number of data elements. So it would seem at first glance that the number of
steps in Selection Sort are roughly half of whatever N
2
is. It would therefore
seem reasonable that we’d describe the efficiency of Selection Sort as being
O(N2
/ 2). That is, for N data elements, there are N2
/ 2 steps. The following
table bears this out:

h Selection Sort and Bubble Sort. Both are
described in Big O as O(N2
), but Selection Sort is actually twice as fast as
Bubble Sort. And indeed, if given the choice between these two options,
Selection Sort is the better choice.


The time complexity of the Selection Sort algorithm is O(n^2) in all cases, regardless of the initial order of the elements.
*/




/* ###############3 insertion sort */

/* 
in insertion sort you take the  value in the array the index 1 we compare it to the previous value which is in the index 0 and it will be doing it until the array is sorted 
like for example in an array of [1,15,6,7] what it will do is take the number 15  and compare it to the number 1 which is less than 15 so the number stays there then the 6 is compared to the number 15  so the 6 is moved to index of the value 15 and the 15 its moved to the index of the number 6, therefore we take the number 7 and is compare to the 15 so its moved the index of the number 15

The time complexity of the Insertion Sort algorithm is O(n^2) in the worst-case and average-case scenarios, and O(n) in the best-case scenario.
*/

function insertionSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
const unsortedArray = [9, 5, 1, 3, 8, 4, 2, 7, 6];
const sortedArray = insertionSort(unsortedArray);
