var Tree = function(value){
  this.value = value;
  this.children = [];
  this.depth = 0;
};

Tree.prototype.DFSelect = function(filter) {
  //YOUR CODE HERE
  var result = [];

  function recurse(node){
    if(filter(node.value, node.depth)){
      result.push(node.value);

    }
    var newDepth = node.depth + 1;
    if(node.children.length !== 0){
      for(var j = 0; j < node.children.length; j++){
        node.children[j].depth = newDepth;
      }
      for(var i = 0; i < node.children.length; i++){
       recurse(node.children[i]);
      }

    }
  }
  recurse(this);
  return result;
};


Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

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

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
