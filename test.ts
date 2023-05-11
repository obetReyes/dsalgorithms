function targetIndices(array: number[], key: number) {
    let start = 0;
    let end = array.length - 1;
    const indices: number[] = [];

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === key) {
            indices.push(middle);

            // Adjust start and end indices to continue searching
            let left = middle - 1;
            let right = middle + 1;

            // Traverse left to find additional occurrences
            while (left >= 0 && array[left] === key) {
                indices.push(left);
                left--;
            }

            // Traverse right to find additional occurrences
            while (right < array.length && array[right] === key) {
                indices.push(right);
                right++;
            }

            break; // Exit the loop
        } else if (array[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return indices;
}

console.log(targetIndices([1, 7, 5, 2, 1, 3, 4, 6, 7, 8, 9, 10], 1));
