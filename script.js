const container = document.querySelector(".container");
const iconDark = document.querySelector(".fa-adjust");
const iconUp = document.querySelector(".fa-sort-asc");

const darkMode = () => {
    container.classList.toggle("dark");
    iconDark.classList.toggle("dark");
    iconUp.classList.toggle("dark");
}