//Task-1

let task1 = document.getElementById("task-1");
task1.textContent = "Hi I Am Task-1";

//Task-2

let task2 = document.querySelector(".task-2");
task2.style.backgroundColor = "lightblue";

//Task-3

let jsdiv = document.createElement("div");
jsdiv.textContent = "Hi I have created from JS";
document.body.appendChild(jsdiv);

jsdiv.style.backgroundColor = "lightgreen";
jsdiv.style.padding = "20px";
jsdiv.style.margin = "10px";
jsdiv.style.border = "1px solid black";

//Task-4

let newli = document.querySelector("li");
newli.textContent = "Added sucessfully from js";
document.querySelector("ul").appendChild(newli);

newli.style.backgroundColor = "lightpink";
newli.style.padding = "20px";
newli.style.margin = "10px";
newli.style.border = "1px solid black";

//Task-5

let task5 = document.querySelector(".task-5");
task5.parentNode.removeChild(task5);

//Task-6

let task6 = document.querySelector(".task-6");
task6.removeChild(task6.lastElementChild);

task6.style.backgroundColor = "purple";
task6.style.padding = "20px";
task6.style.margin = "10px";
task6.style.border = "1px solid black";

//Task-7

let task7 = document.querySelector(".imgfromhtml");
task7.src =
  "https://www.shutterstock.com/image-vector/chai-logo-design-karak-milk-260nw-2216787241.jpg";

task7.style.padding = "20px";
task7.style.margin = "10px";
task7.style.border = "1px solid black";

//Task-8

let task8 = document.querySelector(".task-8");
task8.classList.add("classfromjs");
task8.textContent = "Added";
task8.classList.remove("removefromjs");

task8.style.backgroundColor = "lightblue";
task8.style.padding = "20px";
task8.style.margin = "10px";
task8.style.border = "1px solid black";

//Task-9

let task9 = document.querySelector(".task-9");
document.querySelector(".chage").addEventListener("click", () => {
  document.querySelector("p").textContent = "Hi I am from JS";
});

task9.style.backgroundColor = "lightblue";
task9.style.padding = "20px";
task9.style.margin = "10px";
task9.style.border = "1px solid black";

//Task-10

let task10 = document.querySelector(".task-10");

document.querySelector(".hover").addEventListener("mouseover", () => {
  document.querySelector(".task-10").style.borderColor = "red";
});
