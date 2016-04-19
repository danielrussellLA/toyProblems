// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Reuslt: 
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


function invertTree(root) {
  if(root){
   var temp = root.left;
   root.left = root.right;
   root.right = root.left;
   invertTree(root.left);
   invertTree(root.right); 
  }
}

	

