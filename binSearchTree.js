import Node from './node.js';

export default class BinTree {
    constructor(arr) {
        arr = prepareArr(arr);
        this.root = this.buildTree(arr, 0, arr.length - 1);
    }

    buildTree(arr, startIndex, endIndex) {
        if (startIndex > endIndex) return null;

        let midIndex = Math.floor((startIndex + endIndex) / 2);
        let root = new Node(arr[midIndex]);

        root.left = this.buildTree(arr, startIndex, midIndex - 1);
        root.right = this.buildTree(arr, midIndex + 1, endIndex);

        return root;
    }
}

function prepareArr(arr) {
    arr.sort((a, b) => a - b); // sort numerically

    // remove duplicates
    const uniqueValArr = arr.filter((value, currentIndex, thisArr) => {
        return currentIndex === thisArr.indexOf(value);
    });

    return uniqueValArr;
}
