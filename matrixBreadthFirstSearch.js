var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


function breadFirstSearch(matrix, target){
    var queue = [];

    var coords = [];
    var found = false;

    var Node = function(val, x, y) {
        return {
            val: val,
            x: x,
            y: y
        };
    };
    // initialize the queue with the first item in the matrix
    queue.push(new Node(matrix[0][0], 0, 0));
    // mark it as visited so that we don't check it twice
    matrix[0][0] = '*';
    // Do breadth first search. AKA:
    // while there are nodes to check,
    while(queue.length){
        //check the current node
        var currentNode = queue.shift();
        if (currentNode.val === target) {
            found = true;
            coords = [currentNode.x, currentNode.y];
            break;
        }
        // then add every connected node to the current node being checked to the queue of nodes to be checked
        if(matrix[currentNode.x + 1] && matrix[currentNode.x + 1][currentNode.y] !== '*'){
            queue.push(new Node(matrix[currentNode.x + 1][currentNode.y], currentNode.x + 1, currentNode.y ));
            // mark it as visited so that we don't check it twice
            matrix[currentNode.x + 1][currentNode.y] = '*';
        }
        if(matrix[currentNode.x][currentNode.y + 1] && matrix[currentNode.x][currentNode.y + 1] !== '*'){
            queue.push(new Node(matrix[currentNode.x][currentNode.y + 1], currentNode.x, currentNode.y + 1));
            // mark it as visited so that we don't check it twice
            matrix[currentNode.x][currentNode.y + 1] = '*';
        }
    }
    return JSON.stringify(found) + ' ' + JSON.stringify(coords);
}

console.log(breadFirstSearch(matrix, 5));
