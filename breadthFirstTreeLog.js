var BinarySearchTree = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
};


var vals = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


var c = new BinarySearchTree('C');
c.left = new BinarySearchTree('F');
c.right = new BinarySearchTree('G');

var b = new BinarySearchTree('B');
b.left = new BinarySearchTree('D');
b.right = new BinarySearchTree('E');

var a = new BinarySearchTree('A');
a.left = b;
a.right = c;

function BreadthFirstLog(tree){
    var level1 = [];
    var level2 = [];
    var level3 = [];

    var level = 1;

    while(level < 4){
        if(level === 1){
            console.log(tree.value);
            level2.push(tree.left);
            level2.push(tree.right);
            level++;
        }
        if(level === 2){
            var str = '';
            level2.forEach(function(node){
                str += node.value;
                level3.push(node.left);
                level3.push(node.right);
            });
            console.log(str);
            level++;
        }
        if(level === 3){
            var str = '';
            level3.forEach(function(node){
                str += node.value;
            });
            console.log(str);
            level++;
        }

    }

}

BreadthFirstLog(a);
