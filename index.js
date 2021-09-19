// testing variables
let unsortedArr = [5, 7, 3, 6, 2, 1, 4];
//sorting

//buble sort compares two sequential numbers then swaps

function bubleSort(arr) {
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            let currentNum = arr[i];
            if (currentNum > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = currentNum;
                swaped = true;
            }
        }

    } while (swaped);
    return arr;
}

console.time();
console.log("bubble sort:", bubleSort([...unsortedArr]), "with time:");
console.timeEnd();

console.log("================================================>");

// selection sort searches for the lowest number to swap with the current

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let currentNum = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = currentNum;
    }
    return arr;
}

console.time();
console.log("selection sort:", selectionSort([...unsortedArr]), "with time:");
console.timeEnd();

console.log("================================================>");

// insertion sort searches in previous numbers to see lower 
// and greater numbers than the current to insert the current in between

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i], j;
        for (j = i - 1; j > -1 && arr[j] > currentNum; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentNum;
    }
    return arr;
}

console.time();
console.log("insertion sort:", insertionSort([...unsortedArr]), "with time:");
console.timeEnd();

console.log("================================================>");

// merge sort keeps splitting array till we have multiple arrays
// of a single el then re-merge them asendening

function mergeTwoSortedArray(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.splice(0, 1)[0]);
        } else {
            sortedArr.push(rightArr.splice(0, 1)[0]);
        }
    }
    while (leftArr.length) {
        sortedArr.push(leftArr.splice(0, 1)[0]);
    }
    while (rightArr.length) {
        sortedArr.push(rightArr.splice(0, 1)[0]);
    }
    return sortedArr;
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var midpoint = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, midpoint);
    var rightArr = arr.slice(midpoint, arr.length);
    return mergeTwoSortedArray(mergeSort(leftArr), mergeSort(rightArr));
}

console.time();
console.log("merge sort:", mergeSort([...unsortedArr]), "with time:");
console.timeEnd();

console.log("================================================>");

// quick sort is about pick pivot number then iterate on array then
// move all smaller elements on the left side so the larger will be on the right side
// then recursively repeat that on both side
function swap(arr, firstIndex, secondIndex) {
    temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function pivot(arr, start, end) {
    pivotNumIndex = start;
    swapIndex = start;
    for (i = start + 1; i <= end; i++) {
        if (arr[pivotNumIndex] > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, pivotNumIndex);
    return swapIndex // is now the pivotNumIndex
}

function quickSort(arr, start = 0, end = arr.length -1) {
    if (start < end) {
        var pivotIndex = pivot(arr, start, end);
        // left
        quickSort(arr, start, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr;
}

console.time();
console.log("quick sort:", quickSort([...unsortedArr], 0, unsortedArr.length - 1), "with time:");
console.timeEnd();

console.log("================================================>");

// searching 

// linear search

function linearSearch(arr, x) {
    console.time();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log('Linear search found number: ', x, "with time:");
            console.timeEnd();
            return;
        }
    }
    console.log('Linear search didn\'t find number: ', x, "with time:");
    console.timeEnd();
}

linearSearch([...unsortedArr], 6);
console.log("================================================>");

// binary search

function binarySearch(arr, x) {
    console.time();
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            console.log('binary search found number: ', x, "with time:");
            console.timeEnd();
            return;
        }

        if (arr[mid] > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    console.log('binary search didn\'t find number: ', x, "with time:");
    console.timeEnd();
}

binarySearch(mergeSort([...unsortedArr]), 6);
console.log("================================================>");