var LinkedList = function(){
  this.head = null;
  this.tail = null;
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

LinkedList.prototype.reverse = function(){
  var newLinkedList = new LinkedList();

  function recurse(node) {
    if(node.next === null){
      newLinkedList.head = node;
      newLinkedList.tail = node;
      return;
    }
      recurse(node.next);
      if (newLinkedList.head){
        newLinkedList.addToTail(node.val);
      }
  }
  recurse(this.head);
  return newLinkedList;
};


var Node = function(val){
  this.val = val;
  this.next = null;
};


var a = new LinkedList();
a.addToTail(1);
a.addToTail(2);
a.addToTail(3);
