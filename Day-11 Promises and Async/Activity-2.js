//Task-3
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
