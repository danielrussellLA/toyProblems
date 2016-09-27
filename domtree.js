// Represent the following in a data structure:

// <html>
//     <body>
//         <div>
//             <span>Lorem Ipsum</span>
//             <br />
//         </div>
//     </body>
// </html>

var Tree = function(value){
    this.value = value;
    this.children = [];
};

Tree.prototype.addChild = function(value){
    this.children.push(new Tree(value));
};

function DOMNode(tag, parent){
    this.tag = tag;
    this.parent = parent;
    this.content = '';
    this.children = [];
}

DOMNode.prototype.addElement = function(node, tag, parent){
    if(tag !== undefined && parent !== undefined){
        this.children.push(new DOMNode(tag, parent));
    } else {
        this.children.push(node);
    }
};

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
