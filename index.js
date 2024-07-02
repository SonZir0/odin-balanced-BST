import BinTree from './binSearchTree.js';

let testArr = []; //[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let testTree = new BinTree(testArr);
function testCallBack(node) {
    console.log(node.data);
}

globalThis.prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

prettyPrint(testTree.root);

globalThis.test = testTree;
globalThis.testArr = testArr;

console.log('Calling data-logging callback!\n');
test.levelOrder(testCallBack);

console.log('Calling level order without callback!\n');
console.log(test.levelOrder());

console.log('Calling preOrder with logging callback!\n');
test.preOrder(testCallBack);

console.log('Calling preOrder() without callback!\n');
console.log(test.preOrder());

console.log('Calling inOrder with logging callback!\n');
test.inOrder(testCallBack);

console.log('Calling inOrder() without callback!\n');
console.log(test.inOrder());

console.log('Calling postOrder with logging callback!\n');
test.postOrder(testCallBack);

console.log('Calling postOrder() without callback!\n');
console.log(test.postOrder());
