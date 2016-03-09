var LinkedList = function (initialValue) {
    if(initialValue === undefined){
      this.tail = null;
      this.head = null;
    }
    // this.value = initialValue;
    // this.next = null;
    else {
      this.tail = new Node(initialValue);
      this.head = this.tail;
    }
    // this.head = new Node(this.value);
    // this.tail = this.head;
};

LinkedList.prototype.addToTail = function(val){
		if(this.tail === null){
		  this.tail = new Node(val);
		  // this.next = this.tail;
		  this.head = this.tail;
		} else {
		  if(this.head.next === null){
		    this.head.next = this.tail;
		  }
		  this.tail.next = new Node(val);
		  this.tail = new Node(val);
		}
}

LinkedList.prototype.removeHead = function(){
	if(this.head.next === null){
	  this.tail = null;
	  this.head = null;
	} else {
	  this.head = this.head.next;  
	}
	

}

LinkedList.prototype.contains = function(value){
  // var found = false;
  // var iterate = function(node){
  //   if(node.value == target){
  //     found = true;
  //   } else if (node.next === null){
  //     found = false;
  //   } else {
  //     iterate(node.next);
  //   }
  // };
  // iterate(this.head);
  // return found;
  
  var node = this.head;
  var flag = true;
  while(flag){
    if(node.value === value){
      return true;
    }
    if(node.next === null){
      flag = false;
    }
    node = node.next
  }
  return false;
}

function Node (val) {
  var node = {
    value: val,
    next: null
  }
  return node;
}





