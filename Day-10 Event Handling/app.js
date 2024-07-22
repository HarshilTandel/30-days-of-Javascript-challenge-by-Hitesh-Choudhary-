//Task-1

document.addEventListener('DOMContentLoaded', () => {
    let task1 = document.querySelector(".task-1");
    let changebtn = document.querySelector(".change");

    changebtn.addEventListener("click", () => {
        document.querySelector("p").textContent = "Hey Guys I Am Changed";
    });

    task1.style.backgroundColor = "lightblue";
});

//Task-2

document.addEventListener("DOMContentLoaded", () => {
    let toggleBtn = document.querySelector(".toggle-btn");
    let task2 = document.querySelector(".task-2")
    let toggleImg = document.querySelector(".toggle-img");

    toggleBtn.addEventListener("dblclick", () => {
        toggleImg.classList.toggle("hidden");
    });
    task2.style.backgroundColor = "lightgreen";
});

//Task-3

document.addEventListener("DOMContentLoaded",()=>{
    
    let task3 = document.querySelector(".task-3");
    let para = document.querySelector(".para1");

    para.addEventListener("mouseover",()=>{
        task3.style.backgroundColor = "lightpink";
    })
})

//Task-4

let task4 = document.querySelector(".task-4");
    let para2 = document.querySelector(".para2");

    para2.addEventListener("mouseout", () => {
        task4.style.backgroundColor = "lightpink";
    });

//Task-5

document.addEventListener("DOMContentLoaded",()=>{

let task5 = document.querySelector(".task-5");
let input = document.querySelector(".input");

input.addEventListener("keydown",(event)=> {
    console.log(`key pressed : ${event.key}`)
})
task5.style.backgroundColor = "lightblue";
})

//Task-6

document.addEventListener("DOMContentLoaded",()=>{
let task6 = document.querySelector(".task-6");
let inputKeyup = document.querySelector(".keyup-input");
let displayPara = document.querySelector(".display-para");

inputKeyup.addEventListener("keyup", (event) => {
    displayPara.textContent = `Current value: ${event.target.value}`;
});
task6.style.backgroundColor = "lightblue";
})

//Task-7

document.addEventListener("DOMContentLoaded",()=>{

let task7 = document.querySelector(".task-7");
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});
task7.style.backgroundColor = "lightgray";
});

//Task-8

document.addEventListener('DOMContentLoaded', () => {
   
    let dropdown = document.querySelector(".dropdown");
    let selectedValueParagraph = document.querySelector(".selected-value");
    let task8 = document.querySelector(".task-8");

    dropdown.addEventListener("change", () => {
        
        let selectedValue = dropdown.value;
        selectedValueParagraph.textContent = `Selected value: ${selectedValue}`;
    });
    task8.style.backgroundColor = "lightpink";
});

//Task-9

document.addEventListener('DOMContentLoaded', () => {
   
    let list = document.querySelector(".list");
    let task9 = document.querySelector(".task-9");

    list.addEventListener("click", (event) => {

        if (event.target.tagName === 'LI') {
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });
    task9.style.backgroundColor = "lightgreen";
});

//Task-10

// app.js
document.addEventListener('DOMContentLoaded', () => {
    const parentElement = document.querySelector('.parent');
    const addItemButton = document.getElementById('add-item');
    const childContainer = document.querySelector('.child-container');

    const handleChildClick = (event) => {
        if (event.target.tagName === 'LI') {
            console.log(`Clicked on item: ${event.target.textContent}`);
        }
    };

    parentElement.addEventListener('click', handleChildClick);

    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${childContainer.children.length + 1}`;
        childContainer.appendChild(newItem);
    });
});
