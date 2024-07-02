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

    insert(value, currentNode = this.root) {
        // If the tree is empty, return a new node
        if (this.root === null) this.root = new Node(value);
        // Base case
        if (currentNode === null) return new Node(value);

        // Otherwise, recur down the tree
        if (value < currentNode.data)
            currentNode.left = this.insert(value, currentNode.left);
        else if (value > currentNode.data)
            currentNode.right = this.insert(value, currentNode.right);

        // return the (unchanged) node pointer
        return currentNode;
    }

    deleteNode(value, currentNode = this.root) {
        if (currentNode === null) return currentNode;

        // If the key to be deleted is smaller than the root's data, then it lies in the left subtree
        if (value < currentNode.data)
            currentNode.left = this.deleteNode(value, currentNode.left);
        // If the key to be deleted is greater than the root's data, then it lies in the right subtree
        else if (value > currentNode.data)
            currentNode.right = this.deleteNode(value, currentNode.right);
        // If key is same as root's data, then this is the node to be deleted
        else {
            // Node with only one child or no child

            if (currentNode.left === null) {
                // checks for root only needed to re-assign root to new node in case there is only one child
                if (currentNode === this.root) this.root = currentNode.right;
                return currentNode.right;
            } else if (currentNode.right === null) {
                if (currentNode === this.root) this.root = currentNode.left;
                return currentNode.left;
            }

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            currentNode.data = this.minValue(currentNode.right);

            // Delete the inorder successor in right subtree
            currentNode.right = this.deleteNode(
                currentNode.data,
                currentNode.right
            );
        }

        return currentNode;
    }

    // function to find smallest data/value in the subtree
    minValue(node) {
        let minv = node.data;
        while (node.left !== null) {
            minv = node.left.data;
            node = node.left;
        }
        return minv;
    }

    levelOrder(callbackFn = null) {
        const queue = [this.root];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        if (callbackFn) queue.forEach((node) => callbackFn(node));
        else return queue.map((node) => node.data);
    }

    preOrder(callbackFn, currentNode = this.root) {
        if (!currentNode) return [];

        let tempArr = [];
        if (!callbackFn) {
            tempArr.push(currentNode.data);
        } else {
            callbackFn(currentNode);
        }
        tempArr = tempArr.concat(this.preOrder(callbackFn, currentNode.left));
        tempArr = tempArr.concat(this.preOrder(callbackFn, currentNode.right));
        return tempArr;
    }

    inOrder(callbackFn, currentNode = this.root) {
        if (!currentNode) return [];

        let tempArr = [];
        tempArr = tempArr.concat(this.inOrder(callbackFn, currentNode.left));
        if (!callbackFn) {
            tempArr.push(currentNode.data);
        } else {
            callbackFn(currentNode);
        }
        tempArr = tempArr.concat(this.inOrder(callbackFn, currentNode.right));
        return tempArr;
    }

    postOrder(callbackFn, currentNode = this.root) {
        if (!currentNode) return [];

        let tempArr = [];
        tempArr = tempArr.concat(this.postOrder(callbackFn, currentNode.left));
        tempArr = tempArr.concat(this.postOrder(callbackFn, currentNode.right));
        if (!callbackFn) {
            tempArr.push(currentNode.data);
        } else {
            callbackFn(currentNode);
        }
        return tempArr;
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
