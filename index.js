import BinTree from './binSearchTree.js';

let testArr = [...new Array(25)].map(() => Math.floor(Math.random() * 100));

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

console.log('Is it a balanced tree?\n', testTree.isBalanced());

console.log('Calling level order without callback!\n', test.levelOrder());

console.log('Calling preOrder() without callback!\n', test.preOrder());

console.log('Calling inOrder() without callback!\n', test.inOrder());

console.log('Calling postOrder() without callback!\n', test.postOrder());

console.log(
    'Inserting new nodes with values: 1000, 200, -100, -10, -50, 350\n'
);
testTree.insert(1000);
testTree.insert(200);
testTree.insert(-100);
testTree.insert(-10);
testTree.insert(-50);
testTree.insert(350);
testTree.insert(-15);
console.log('Here is our tree:\n');
prettyPrint(testTree.root);

console.log('Is it still balanced?\n', testTree.isBalanced());
console.log('Rebalance incoming!\n');
testTree.rebalance();
console.log('Is it balanced now?\n', testTree.isBalanced());
console.log('Here is our tree:\n');
prettyPrint(testTree.root);

console.log('Calling level order without callback!\n', test.levelOrder());

console.log('Calling preOrder() without callback!\n', test.preOrder());

console.log('Calling inOrder() without callback!\n', test.inOrder());

console.log('Calling postOrder() without callback!\n', test.postOrder());
