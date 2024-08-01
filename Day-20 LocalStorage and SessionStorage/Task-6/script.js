
const sessionUser = { name: "Bob", email: "bob@example.com" };
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));

const sessionSavedUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log("Session User:", sessionSavedUser);

