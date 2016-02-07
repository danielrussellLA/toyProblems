var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();
  var result = [];
  var queueLength = 0;
  
  queue.enqueue([this, 0]);
  queueLength++;
  
  while(queueLength > 0){
    var checkedNode = queue.dequeue();
    queueLength--;
    if(filter(checkedNode[0].value, checkedNode[1])){
      result.push(checkedNode[0].value);
    }
    
    if(checkedNode[0].children.length > 0){
      for(var i = 0; i < checkedNode[0].children.length; i++ ){
        queue.enqueue([checkedNode[0].children[i], checkedNode[1] + 1]);
        queueLength++;
      }
    }
    
  }
  return result;
};



/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};