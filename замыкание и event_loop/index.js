for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
    setTimeout(() => {
        console.log(i);
    }, 0)
}

for (var j = 0; j < 10; j++) {
    function foo(x) {
        setTimeout(() => {
            console.log(x);
        }, 0)
    }
    foo(j);
    setTimeout(() => {
        console.log(j);
    }, 3000)
}


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 5000)
    setTimeout(() => {
        console.log(i);
    }, 0)
}
