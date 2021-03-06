var test1 = function (a, b) {
    return a + b;
};

let test2 = (a, b) => {
    return a + b;
}

let test3 = (a, b) => a + b;

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));


function Person(name, yearCount) {
    this.name = name;
    this.age = 0;

    // 0 출력
    // var outerThis = this;
    // var incrAge = function () {
    //     ++outerThis.age;
    // };

    // 20 출력
    var incrAge = () => {
        ++this.age;
    }

    for (var i = 1; i <= yearCount; ++i) {
        incrAge();
    }
}

var p1 = new Person('홍길동', 20);
console.log(p1.name + '님의 나이 : ' + p1.age);