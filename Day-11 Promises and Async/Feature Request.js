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

// -------------------------------------------------------------------
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let bio = {
            name: "Harshil",
            rollno: 136,
            field: "IT"
        };
        if (bio) {
            resolve({
                name: "Harshil",
                sname: "Tandel",
                clg: "SVIT"
            });
        } else {
            reject("Something Went Wrong");
        }
    }, 5000);
});

promise3
    .then((data) => {
        console.log(data.name, data.sname);
        return { rollno: 136, sname: "Tandel" };
    })
    .then((data) => {
        console.log(data.sname);
        return { clg: "SVIT" };
    })
    .then((data) => {
        console.log(data.clg);
    })
    .catch((error) => {
        console.error(error);
    });

// -------------------------------------------------------------------

const asyncFunction = async () => {
  const afterasync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am console after async");
    }, 3000);
  });

  const result = await afterasync;
  console.log(result);
};

asyncFunction();

const asyncfunction = async () => {
  const afterasync = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error 404"));
    }, 3000);
  });

  try {
    await afterasync;
  } catch (error) {
    console.error(error.message);
  }
};

asyncfunction();

// -------------------------------------------------------------------
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

const fetchDataAsync = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataAsync();
// -------------------------------------------------------------------
const Promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const Promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const Promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([Promise1, Promise2, Promise3]).then((values) => {
  console.log(values);
});

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
