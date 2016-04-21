var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

var Node = function(val){
  this.val = val;
  this.next = null;
};

LinkedList.prototype.addToTail = function(val){
  var node = new Node(val);
  if(this.head === null){
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

function reverse(linkedList) {
  var newLinkedList = new LinkedList();
  var vals = [];

  function getVals(node){
    if(node === null){
      return;
    }
    vals.push(node.val);
    getVals(node.next);
  }
  getVals(linkedList.head);
  vals.reverse();

  for(var i = 0; i < vals.length; i++){
    newLinkedList.addToTail(vals[i]);
  }
  return newLinkedList;
  // function recurse(node) {
  //   if(node.next === null){
  //     newLinkedList.head = node;
  //     newLinkedList.tail = node;
  //     return;
  //   }
  //   recurse(node.next);
  //   newLinkedList.addToTail(node.val);
  // }
  //
  // recurse(linkedList.head);
  // linkedList = newLinkedList;
  // return linkedList;
}

var a = new LinkedList();
a.addToTail(1);
a.addToTail(2);
a.addToTail(3);

var b = reverse(a);
console.log(b);
console.log(reverse(b));
// console.log(reverse(a));
// console.log(reverse(a));
