//Task-8

const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 1000)
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 2000)
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 3000)
  );
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  

  //Task-9

  const promise4 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 4 resolved"), 2000)
  );
  const promise5 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 5 resolved"), 1000)
  );
  const promise6 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 6 resolved"), 3000)
  );
  
  Promise.race([promise4, promise5, promise6]).then((value) => {
    console.log(value);
  });