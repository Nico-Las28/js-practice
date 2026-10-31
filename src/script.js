// ---------- Data ----------
const menu = [
    { name: "Cappuccino",   price: 3.2, category: "drink", vegan: false },
    { name: "Oat Latte",    price: 3.9, category: "drink", vegan: false },
    { name: "Croissant",    price: 2.5, category: "food",  vegan: false },
    { name: "Banana Bread", price: 3.0, category: "food",  vegan: true  },
];

// ---------- Elements ----------
const menuList     = document.querySelector("#menu-list");
const search       = document.querySelector("#search");
const categoryBtns = document.querySelectorAll(".btn-cat");
const questions    = document.querySelectorAll(".fua-fragen");
const hamburger    = document.querySelector("#menu-btn2");
const hamNav       = document.querySelector("#nav2");

// ---------- Menu: render, search, filter ----------
let currentCategory = "all";

function renderMenu(items) {
    if (items.length === 0) {
        menuList.innerHTML = "<li>No items found</li>";
        return;
    }
    menuList.innerHTML = items
        .map((item) => `<li>${item.name}: ${item.price.toFixed(2)}€</li>`)
        .join("");
}

function updateMenu() {
    const text = search.value.toLowerCase();

    const results = menu.filter((item) => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(text);
        return matchesCategory && matchesSearch;
    });

    renderMenu(results);
}

search.addEventListener("input", updateMenu);

categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentCategory = btn.dataset.category;

        categoryBtns.forEach((b) => b.classList.remove("bg-amber-600", "text-white"));
        btn.classList.add("bg-amber-600", "text-white");

        updateMenu();
    });
});

// ---------- FAQ (only one answer open at a time) ----------
questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const wasOpen = !answer.classList.contains("hidden");

        questions.forEach((q) => q.nextElementSibling.classList.add("hidden"));

        if (!wasOpen) {
            answer.classList.remove("hidden");
        }
    });
});

// ---------- Hamburger menu ----------
hamburger.addEventListener("click", () => {
    hamNav.classList.toggle("hidden");
});

// ---------- Initial render ----------
document.querySelector('.btn-cat[data-category="all"]').classList.add("bg-amber-600", "text-white");
updateMenu();