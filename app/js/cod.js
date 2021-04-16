var getNameFile = function (b) {
    var a = [];
    var arr = [];
    for (var i = 0; i <= b.length; i++) {
        a.push(b[i]);
    }
    ;
    a.reverse();
    for (var i = 0; i <= a.length; i++) {
        arr.push(a[i]);
        if (a[i] === ".") {
            break
        }
    }
    arr.reverse();
    var str = arr.join('');
    if (str[0] === ".") {
        return (str);
    } else {
        return ('');
    }
};








