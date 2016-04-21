function BinaryTreeNode(value) {
   this.value = value;
   this.left  = null;
   this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
   this.left = new BinaryTreeNode(value);
   return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
   this.right = new BinaryTreeNode(value);
   return this.right;
};


function isValidBinaryTree(tree){
	var root = tree.value;
	var isValid = true;

	function recurse(node) {
		
	}

	recurse(tree);
	return isValid;
}


var ten = new BinaryTreeNode(10);
var eight = new BinaryTreeNode(8);
eight.insertLeft(7);
eight.insertRight(9);
ten.left = eight;

var twelve = new BinaryTreeNode(12)
twelve.insertLeft(11);
twelve.insertRight(13);
ten.right = twelve;

console.log('expects ' + isValidBinaryTree(ten) + ' to be true'); // true

var root = new BinaryTreeNode(10);
root.insertLeft(13);
root.insertRight(9);

root.right.insertLeft(11);
root.left.insertRight(7);

console.log('expects ' + isValidBinaryTree(root) + ' to be false'); // false

 //     10
 //    /  \
 //   8    12
 //  / \   / \
 // 7   9 11 13