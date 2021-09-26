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

function quickSort(arr, start = 0, end = arr.length - 1) {
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

// stack & queue

function Stack() {
    this.data = [];

    this.push = (val) => {
        this.data.push(val);
    }

    this.pop = () => {
        return this.data.pop();
    }
}

function Queue() {
    this.data = [];

    this.push = (val) => {
        this.data.push(val);
    }

    this.pop = () => {
        return this.data.shift();
    }
}

// linked list

function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;

    this.push = (val) => {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        return node;
    }

    this.pop = () => {
        if (!this.head)
            return undefined;
        var pre;
        var current = this.head;
        if (!this.head.next) {
            this.head = null;
            this.size--;
            return current;
        }
        while (current.next) {
            pre = current;
            current = current.next;
        }
        pre.next = null;
        this.size--;
        return current;
    }

    this.find = (val) => {
        if (!this.head)
            return undefined;
        if (this.head.val == val) {
            return this.head;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
            if (current.val == val) {
                return current;
            }
        }
        return undefined;
    }

    this.insert = (val, index = this.size) => {
        if (this.size < index)
            return this.push(val);
        var node = new Node(val);
        var pre;
        var current = this.head;
        var counter = 1;
        if (index == 1) {
            node.next = this.head;
            this.head = node;
        } else {
            while (counter != index) {
                pre = current;
                current = current.next;
                counter++;
            }
            node.next = current;
            pre.next = node;
        }
        this.size++;
        return node;
    }

    this.remove = (val) => {
        if (!this.head)
            return undefined;
        var pre;
        var current = this.head;
        if (this.head.val == val) {
            this.head = this.head.next;
            return current;
        }
        while (current.next && current.val != val) {
            pre = current;
            current = current.next;
        }
        if (current.val == val) {
            pre.next = current.next;
            return current;
        }
        return undefined;
    }

    this.clear = () => {
        this.head = null;
    }
}

var list = new LinkedList();
list.push("Hi");
list.push("am");
list.push("ash");
list.push(",");
list.insert("I", 2);
list.pop();
list.remove("Hi")
list.find("ash")
console.log('linked list structure: ', list);

console.log("================================================>");

// tree

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function Tree(rootNode = null) {
    this.root = rootNode;

    this.breadthFirstSearchListing = () => {
        var vistedList = [];
        var nodesQueue = new Queue();
        var currentNode;
        nodesQueue.push(this.root);

        while (nodesQueue.data.length) {
            currentNode = nodesQueue.pop();
            vistedList.push(currentNode.val);
            if (currentNode.left)
                nodesQueue.push(currentNode.left);
            if (currentNode.right)
                nodesQueue.push(currentNode.right);
        }

        return vistedList;
    }

    this.depthFirstSearchListing = () => {
        var vistedList = [];
        function traverse(node) {
            vistedList.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return vistedList;
    }
}

/* $$$ Tree visualizing $$$
           10
        19     6
     99    8     20
*/
// level one
var rootNode = new TreeNode(10);
// level two
var levelTwoLeftNode = new TreeNode(19); // left
var levelTwoRightNode = new TreeNode(6); // right
// level three
var levelThreeLeftLeftNode = new TreeNode(99); // left left
var levelThreeLeftRightNode = new TreeNode(8); // left right
var levelThreeRightRightNode = new TreeNode(20); // right right
// linking backward
levelTwoLeftNode.left = levelThreeLeftLeftNode;
levelTwoLeftNode.right = levelThreeLeftRightNode;
levelTwoRightNode.right = levelThreeRightRightNode;
rootNode.left = levelTwoLeftNode;
rootNode.right = levelTwoRightNode;

// create tree;
var tree = new Tree(rootNode);

console.time();
console.log("breadthFirstSearch list:", tree.breadthFirstSearchListing(), "with time:");
console.timeEnd();

console.time();
console.log("depthFirstSearch list:", tree.depthFirstSearchListing(), "with time:");
console.timeEnd();

console.log("================================================>");

// undirected Graph

class UnDirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(v1Name, v2Name) {
        this.adjacencyList[v1Name].push(v2Name);
        this.adjacencyList[v2Name].push(v1Name);
    }

    removeEdge(v1Name, v2Name) {
        this.adjacencyList[v1Name] = this.adjacencyList[v1Name].filter((name) => name != v2Name);
        this.adjacencyList[v2Name] = this.adjacencyList[v2Name].filter((name) => name != v1Name);
    }

    removeVertex(name) {
        while (this.adjacencyList[name].length) {
            let cureentVetex = this.adjacencyList[name].pop();
            this.removeEdge(name, cureentVetex);
        }
        delete this.adjacencyList[name];
    }
}

let unDirectedGraph = new UnDirectedGraph();
unDirectedGraph.addVertex("Netherlands");
unDirectedGraph.addVertex("Germany");
unDirectedGraph.addVertex("Norway");
unDirectedGraph.addEdge("Norway", "Germany");
unDirectedGraph.addEdge("Norway", "Netherlands");
unDirectedGraph.addEdge("Germany", "Netherlands");
console.log('undirected graph structure: ', unDirectedGraph.adjacencyList);
unDirectedGraph.removeEdge("Germany", "Netherlands");
console.log('undirected graph structure: ', unDirectedGraph.adjacencyList);
unDirectedGraph.removeVertex("Norway");
console.log('undirected graph structure: ', unDirectedGraph.adjacencyList);

console.log("================================================>");