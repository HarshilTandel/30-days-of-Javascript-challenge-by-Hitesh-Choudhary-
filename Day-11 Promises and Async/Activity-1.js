//Task -1

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task-1 Completed within 2 Seconds");
    }, 2000);
});

promise1.then((msg) => console.log(msg));

//Task -2

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Task-2 Rejected within 2 Seconds"));
    }, 2000);
});

promise2.catch((error) => console.error(error.message));