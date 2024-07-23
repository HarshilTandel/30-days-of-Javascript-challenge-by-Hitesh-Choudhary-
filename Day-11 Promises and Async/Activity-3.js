//Task-4

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

//Task-5

const asyncfunction = async () => {
    const afterasync = new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(new Error("Error 404"));
        }, 3000);
    });

    try {
        await afterasync
    } catch (error) {
        console.error(error.message);
    }
};

asyncfunction();