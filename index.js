// testing variables
let unsortedArr = [25, 5, 8, 3, 6, 2, 1];
//sorting

// insertion sort

function insertionSort(arr) {
    console.time();
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i], j;
        for (j = i - 1; j > -1 && arr[j] > currentNum; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentNum;
    }

    console.log("Insertion sort:", arr, "with time:");
    console.timeEnd();
}

insertionSort(unsortedArr);
console.log("================================================>");
//buble sort

function bubleSort(arr) {
    console.time();
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < arr.length; i++) {
            let currentNum = arr[i];
            if (currentNum > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = currentNum;
                swaped = true;
            }
        }

    } while (swaped);

    console.log("Buble sort:", arr, "with time:");
    console.timeEnd();
}

bubleSort(unsortedArr);
console.log("================================================>");

// selection sort

function selectionSort(arr) {
    console.time();
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

    console.log("selection sort:", arr, "with time:");
    console.timeEnd();
}

selectionSort(unsortedArr);
console.log("================================================>");

// merge sort

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length)
        sortedArr.push(leftArr.shift());
    while (rightArr.length)
        sortedArr.push(rightArr.shift());
    return sortedArr;
}
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var midpoint = parseInt(arr.length / 2);
    var leftArr = arr.slice(0, midpoint);
    var rightArr = arr.slice(midpoint, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


console.time();
console.log("merge sort:", mergeSort(unsortedArr), "with time:");
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

linearSearch(unsortedArr, 3);
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

binarySearch(unsortedArr, 3);
console.log("================================================>");