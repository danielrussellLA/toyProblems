// Represent the following in a data structure:

// <html>
//     <body>
//         <div>
//             <span>Lorem Ipsum</span>
//             <br />
//         </div>
//     </body>
// </html>

// create a node for a doubly linked list node (notice how it's sort of a hybrid between a tree and a doubly linked list)
function DOMNode(tag, parent){
    this.tag = tag;
    this.parent = parent;
    this.content = '';
    this.children = [];
}
// create a function on its prototype to add a new node with either an already created DOMNode or with a tagname and a parent reference.
DOMNode.prototype.addElement = function(node, tag, parent){
    if(tag !== undefined && parent !== undefined){
        this.children.push(new DOMNode(tag, parent));
    } else {
        this.children.push(node);
    }
};

// this just manually creates the tree above with these two functions above.
var html = new DOMNode('html', null);
var body = new DOMNode('body', html);
var div = new DOMNode('div', body);
var span = new DOMNode('span', div);
span.content = 'Lorem Ipsum';
var br = new DOMNode('br', div);

div.addElement(span);
div.addElement(br);

body.addElement(div);
html.addElement(body);

// log it out and see the dom tree.
console.log(html);
