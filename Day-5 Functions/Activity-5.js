// Task 9
const callFunc = (func, num) => {
    while (num--) {
        func();
    }
}

const printHello = () => {
    console.log("Hello");
}

callFunc(printHello, 5);

// Task 10
const callHigherOrderFunc2 = (func1, func2, value) => {
    const result = func1(value);
    func2(result);
};

const func1 = (value) => {
    return value + 10; 
};

const func2 = (func1Value) => {
    console.log("Result after applying both functions:", func1Value);
};

callHigherOrderFunc2(func1, func2, 5); 