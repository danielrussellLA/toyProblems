function remove_dupes_a(list) {
    var uniq = {};
    var result = [];
    list.forEach(function(val) {
        if (!uniq[val]) {
            uniq[val] = 1
        }
    })
    for (var key in uniq) {
        result.push(parseInt(key));
    }
    return result;
}

function remove_dupes_b(list) {
    var uniq = {};
    var result = [];
    list.forEach(function(val, i) {
        if (!uniq[val]) {
            uniq[val] = {count: 0, index: i}
        } else {
            if (uniq[val].count < 1) {
                uniq[val].count++;
                uniq[val].index = i;
            }
        }
    })
    for (var key in uniq) {
        var i = uniq[key].index
        result[i] = list[i];
    }
    return result.filter(function(val) {
        return val !== undefined;
    });
}

function remove_dupes_c(list, order) {
    var uniq = {};
    var result = [];
    list.forEach(function(val, i) {
        if (!uniq[val]) {
            uniq[val] = {count: 0, index: i}
        } else {
            if (uniq[val].count < order) {
                uniq[val].count++;
                uniq[val].index = i;
            }
        }
    })
    for (var key in uniq) {
        var i = uniq[key].index
        result[i] = list[i];
    }
    return result.filter(function(val) {
        return val !== undefined;
    });
}

console.log(remove_dupes_a([1,2,1,3,2,1,7]))
console.log(remove_dupes_b([1,2,1,3,2,1,7]))
console.log(remove_dupes_c([1,2,1,3,2,1,7], 3))
