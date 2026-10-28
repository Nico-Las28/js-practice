console.log("Hello from Javascript");

const myName = "Nico";
let age = 25;
console.log(`My name is ${myName} and i am ${age} old.`);

const product28 = "jeans";
let price = 19.99;
let quantity = 12;
console.log(`We got ${product28} at ${price}$ with ${quantity} left, Get them now!`) 

age = age + 1;
console.log(age);

console.log(typeof myName, typeof age, typeof true);

document.querySelector("h1").textContent = "Changed by JavaScript";

function total(price, quantity){
    return price * quantity;
}
console.log(total(19.99, 3));

const double = (n) => n * 2;
console.log(double(21));

const tax = (n) => n * 1.19;
console.log(`The jeans after taxes will cost ${tax(price).toFixed(2)}$.`);

function isAdult(age){
    return age >= 18;
}
console.log(isAdult(19));

const stock = 4;
if (stock >= 10) {
    console.log("Plenty Left");
} else if (stock > 0) {
    console.log("Almost sold out");
} else {
    console.log("Sold out");
}

function shippingCost(orderTotal) {
    if (orderTotal >= 50) {
        return 0;
    } else {
        return 4.99;
    }
}

const orderTotal = total(19.99, 3);
console.log(`Total: ${orderTotal}, shipping: ${shippingCost(orderTotal)}`)

let a = 0;
for (let i = 1; i <= 100; i++) {
  a = a + i;
}
console.log(a);

const productOne = {
    name: "Jeans",
    price: 19.99,
    inStock: true,
};

console.log(productOne.name);
productOne.price = 24.99;

const menu = [
    { name: "Cappuccino", price: 3.2, category: "drink", vegan: false },
    { name: "Oat Latte", price: 3.9, category: "drink", vegan: false },
    { name: "Croissant", price: 2.5, category: "food", vegan: false },
    { name: "Banana Bread", price: 3.0, category: "food", vegan: true },
];

const menuList = document.querySelector("#menu-list");

function renderMenu(items) {

    if (items.length === 0) {
        list.innerHTML = "<li>No items found</li>";
        return;
    }

    list.innerHTML = items
        .map((item) => `<li>${item.name}: ${item.price.toFixed(2)}€</li>`)
        .join("");
}

console.log(menu.length);
console.log(menu[0].name);

menu.forEach((item) => {
    console.log(`${item.name}: ${item.price.toFixed(2)}€`);
});

const veganItems = menu.filter((item) => item.vegan);
const names = menu.map((item) => item.name);
const latte = menu.find((item) => item.name === "Oat Latte");

const list = document.querySelector("#menu-list");

list.innerHTML = menu
    .map((item) => `<li>${item.name}: ${item.price.toFixed(2)}€</li>`)
    .join("");

const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        console.log(`You clicked ${tab.textContent}`);
    });
});

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("bg-amber-600", "text-white"));
        tab.classList.add("bg-amber-600", "text-white");
    });
});

const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("hidden"); 
    });
});

const search = document.querySelector("#search");

search.addEventListener("input", () => {
    const text = search.value.toLowerCase();
    const results = menu.filter((item) =>
        item.name.toLowerCase().includes(text)
    );
    renderMenu(results);
})

const btnCategory = document.querySelectorAll(".btn-cat");

btnCategory.forEach((cat) => {
  cat.addEventListener("click", () => {
    currentCategory = cat.dataset.category;   // remember the choice

    btnCategory.forEach((b) => b.classList.remove("bg-amber-600", "text-white"));
    cat.classList.add("bg-amber-600", "text-white");

    updateMenu();
  });
});

search.addEventListener("input", () => {
  updateMenu();
});

let currentCategory = "all";

function updateMenu() {
    const text = search.value.toLowerCase();

    const results = menu.filter((item) => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(text);
    return matchesCategory && matchesSearch;
    });

    renderMenu(results)
}