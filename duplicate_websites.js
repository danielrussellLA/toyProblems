// Given a table of [Url => Content] pairs produce a new table of [Url => Duplicate Urls] pairs.
//
// Example Input:
// a.com => <html>alpha</html>
// b.com => <html>beta</html>
// c.com => <html>gamma</html>
// d.com => <html>alpha</html>
// e.com => <html>alpha</html>
//
// Example Output:
// a.com => [ d.com, e.com ]
// b.com => []
// c.com => []

var websites = {
    "a.com": "<html>alpha</html>",
    "b.com": "<html>beta</html>",
    "c.com": "<html>gamma</html>",
    "d.com": "<html>alpha</html>",
    "e.com": "<html>alpha</html>"
};

var formatted = [];
var noDupes = {};

for(var i in websites){
    var dupeFound = false;
    for (var k in websites){
        if (websites[k] === websites[i]){
            if(noDupes[i] === undefined && !dupeFound){
                noDupes[i] = [];
            } else {
                dupeFound = true;
                noDupes[i].push(k);
            }
        }
    }
}

var result = {};
var duplicates = [];
for(var key in noDupes){
    if(noDupes[key] !== []){
        noDupes[key].forEach(function(domain){
            duplicates.push(domain);
        });
    }
    if(!duplicates.includes(key)){
        result[key] = noDupes[key];
    }
}


console.log(result);
